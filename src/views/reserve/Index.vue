<template>
  <v-container>
    <notifications position="bottom right" />
    <v-row>
      <!-- Left Section -->
      <v-col cols="4">
        <ReservationSummary :truckDetails="truckDetails" />
      </v-col>

      <!-- Right Section -->
      <v-col class="relative" cols="8">
        <!-- Header -->
        <div>
          <span class="text-base font-semibold text-gray-700">{{
            headerText
          }}</span>
          <v-progress-linear
            class="mt-10px"
            :model-value="progressValue"
            color="primary"
          />
        </div>

        <!-- Body -->
        <keep-alive>
          <component
            :ref="currentComponent"
            :is="currentComponent"
            @submit="reserveApi"
            @updateDetails="updateDetails"
          />
        </keep-alive>

        <!-- Footer -->
        <div
          class="mt-10px flex items-center justify-center gap-10px bottom-0 w-full"
        >
          <v-btn
            color="primary"
            variant="outlined"
            @click.stop="navigateBackward"
          >
            Previous
          </v-btn>
          <v-btn
            v-if="currentStep !== 3"
            color="primary"
            @click.stop="navigateForward"
          >
            Next
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState } from "vuex";
import AdditionalInformation from "./components/AdditionalInformation.vue";
import ReservationSummary from "./components/ReservationSummary.vue";
import DeliveryDetails from "./components/DeliveryDetails.vue";
import PaymentDetails from "./components/PaymentDetails.vue";
import PickupDetails from "./components/PickupDetails.vue";
import { toRaw } from "vue";
import { calculateDistance } from "@/utils";
import _cloneDeep from "lodash/cloneDeep";
import GoogleMapMixin from "@/mixings/googleMapMixin";
export default {
  name: "Index",
  components: {
    AdditionalInformation,
    ReservationSummary,
    DeliveryDetails,
    PaymentDetails,
    PickupDetails,
  },
  mixins: [GoogleMapMixin],
  computed: {
    ...mapState("truck", ["truckDetails"]),
    headerText() {
      const labels = {
        1: "Additional information",
        2: "Pickup details",
        3: "Delivery details",
        //4: "Payment details",
      };

      return labels[this.currentStep] ?? "";
    },
    currentComponent() {
      return this.componentsUsed[this.currentStep] ?? null;
    },
    progressValue() {
      return (this.currentStep / Object.keys(this.componentsUsed).length) * 100;
    },
  },
  data() {
    return {
      componentsUsed: {
        1: "AdditionalInformation",
        2: "PickupDetails",
        3: "DeliveryDetails",
        // 4: "PaymentDetails",
      },
      currentStep: 1,
      pickVal: {},
      deliveryVal: {},
      info: {},
    };
  },

  methods: {
    updateDetails(payload) {
      // console.log("final-d-p==", payload);
      if (payload.type === "deliver") {
        this.deliveryVal = payload.rawVal;
      } else if (payload.type === "pickUp") {
        this.pickVal = payload.rawVal;
      } else {
        this.info = payload.rawVal;
      }
    },

    async navigateForward() {
      const isFormCorrect = await this.$refs[
        this.currentComponent
      ].validate.$validate();
      if (!isFormCorrect) {
        this.$notify({
          type: "error",
          title: "Error",
          text: "*Fields required",
        });
        return;
      }
      if (this.currentStep < Object.keys(this.componentsUsed).length) {
        this.currentStep++;
      }
    },
    navigateBackward() {
      if (this.currentStep === 1) {
        this.$router.push("reserve");
      }
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    createPayload(
      { company = "", firstName = "", lastName = "", ...rest },
      info,
      name
    ) {
      const start = info?.startTime;
      var startRange;
      if (start) {
        startRange = `${info?.startTime}`;
      } else {
        startRange = null;
      }

      const stop = info?.stopTime;
      var stopRange;
      if (stop) {
        stopRange = `${info?.stopTime}`;
      } else {
        stopRange = null;
      }

      return {
        name: name,
        contactPerson: `${firstName} ${lastName}`,
        date: info && info.date,
        startTime: startRange,
        endTime: stopRange,
        ...rest,
      };
    },
    goToDashboard() {
      const accessToken = localStorage.getItem("access_token");
      if (!process.env.NODE_ENV || process.env.NODE_ENV !== "development") {
        window.location.href = `https://dashboard.truckpedia.io/login?access_token='${accessToken}'`;
      } else {
        window.location.href = `http://127.0.0.1:8000/login?access_token='${accessToken}'`;
      }
    },
    async reserveApi() {
      const truckDetails = toRaw(this.truckDetails);
      const pickUpDetails = this.createPayload(
        this.pickVal,
        this.info.pickUp,
        this.pickVal.company
      );
      const deliveryDetails = this.createPayload(
        this.deliveryVal,
        this.info.delivery,
        this.deliveryVal.company
      );

      // const miles = calculateDistance(
      //   this.pickVal.latitude,
      //   this.pickVal.longitude,
      //   this.deliveryVal.latitude,
      //   this.deliveryVal.longitude
      // );

      const routes = [
        {
          destination: {
            lat: this.deliveryVal.latitude,
            lng: this.deliveryVal.longitude,
          },
          origin: { lat: this.pickVal.latitude, lng: this.pickVal.longitude },
        },
      ];
      const totalDistanceInMeter =
        await this.getGoogleDistanceBetweenMultipleRoutes(routes);

      // convert: meter to miles
      const miles = (totalDistanceInMeter / 1609.34).toFixed(2);

      const payload = {
        companyId: truckDetails.id,
        deliveryType: truckDetails.deliveryType,
        estimatedPrice: truckDetails.estimatedPrice,
        additionalInformation: {
          // loadUniqueId: 1232,
          estimatedShipmentValue: this.info.shipment,
          itemDescription: this.info.description,
          totalMiles: miles,
          calculateUsing: "google_maps",
        },
        pickupDetails: [pickUpDetails],
        deliveryDetails: [deliveryDetails],
      };
      this.$store
        .dispatch("truck/reserve", payload)
        .then((data) => {
          this.$notify({
            type: "success",
            title: "Success",
            text: "Reserve successfully.",
          });
          // this.goToDashboard(); // go to ezpapel dashboard
          this.$router.push({ name: "home" }); // go to truckpedia homepage
        })
        .catch((error) => {
          console.error(error);
          if (!error) return;
          this.$notify({
            type: "error",
            title: "Error",
            text:
              (((error || {}).response || {}).data || {}).message ||
              "Something went wrong",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/utility.scss";
</style>
