<template>
  <div>
    <v-row>
      <v-col cols="6">
        <div class="mt-30px">
          <div class="flex flex-col w-full">
            <h3 class="">
              Great! Now tell us a little bit more about the delivery location
            </h3>
            <div class="mt-20px w-full">
              <label class="text-sm">Company or Individual name</label>
              <input
                type="text"
                v-model="deliveryVal.company"
                class="custom-input"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Address</label>
              <GMapAutocomplete
                id="map"
                :autoHighlight="true"
                :name="'street-address'"
                class="custom-input"
                :country="['us', 'ca']"
                @place_changed="setAddress($event)"
                placeholder=""
              >
              </GMapAutocomplete>
              <span
                v-if="v$.deliveryVal.address.$error"
                class="text-red text-caption font-weight-bold mr-5"
                >*required</span
              >

              <!-- <vue-google-autocomplete
                id="map-pickup"
                class="custom-input"
                :country="['us', 'ca']"
                v-on:placechanged="setAddress($event)"
              >
              </vue-google-autocomplete> -->
              <!-- <input class="custom-input" /> -->
              <!-- <label class="text-xs text-gray-400">
                This address is not recognized, please double check that it is entered correctly. If
                the address is correct, you may proceed with your shipment.
              </label> -->
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">City</label>
              <input v-model="deliveryVal.city" class="custom-input" />
              <span
                v-if="v$.deliveryVal.city.$error"
                class="text-red text-caption font-weight-bold mr-5"
                >*required</span
              >

              <!-- <label class="text-xs text-gray-400">Apartment, Unit, Suite, etc.</label> -->
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">State</label>
              <input
                v-model="deliveryVal.state"
                class="custom-input"
              />
              <span
                v-if="v$.deliveryVal.state.$error"
                class="text-red text-caption font-weight-bold mr-5"
                >*required</span
              >

              <!-- <label class="text-xs text-gray-400">Seattle etc.</label> -->
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Zip code</label>
              <input v-model="deliveryVal.zipCode" class="custom-input" />
              <span
                v-if="v$.deliveryVal.zipCode.$error"
                class="text-red text-caption font-weight-bold mr-5"
                >*required</span
              >
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Pick-up reference number (optional)</label>
              <input
                v-model="deliveryVal.reference"
                class="custom-input"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Special instructions (optional)</label>
              <textarea
                v-model="deliveryVal.specialInstruction"
                class="custom-input"
                rows="6"
              />
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="mt-30px">
          <div class="flex flex-col w-full">
            <h3 class="">Who can we contact at this location?</h3>
            <div class="mt-20px w-full">
              <label class="text-sm">First name</label>
              <input
                v-model="deliveryVal.firstName"
                class="custom-input"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Last name</label>
              <input
                v-model="deliveryVal.lastName"
                class="custom-input"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Phone</label>
              <input
                v-model="deliveryVal.phone"
                class="custom-input"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Email</label>
              <input
                v-model="deliveryVal.email"
                class="custom-input"
                type="email"
              />
            </div>
            <!-- <div class="mt-10px flex gap-5px w-full">
              <input type="checkbox" />
              <label class="text-sm">Appointment required</label>
            </div> -->
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { isProxy, toRaw } from "vue";
import GoogleMapMixin from "../../../../src/mixings/googleMapMixin";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
// import DeliveryDetailsVue from '../../../../tp-homepage/src/views/reserve/components/DeliveryDetails.vue'
import $ from 'jquery';
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      deliveryVal: {
        address: { required },
        city: { required },
        state: { required },
        zipCode: { required },
        longitude: { required },
        latitude: { required },
      },
    };
  },
  name: "DeliveryDetails",
  data() {
    return {
      deliveryVal: {
        address: "",
        city: "",
        state: "",
        zipCode: "",
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        specialInstruction: "",
        reference: "",
        company: "",
        latitude: null,
        longitude: null,
        // isAppointment:false
      },
    };
  },
  components: {
    VueGoogleAutocomplete,
  },
  mixins: [GoogleMapMixin],

  watch: {
    deliveryVal: {
      deep: true,
      handler: function (nv, ov) {
        if (isProxy(nv)) {
          const rawVal = toRaw(nv);
          const payload = { rawVal, type: "deliver" };
          this.$emit("updateDetails", payload);
          // console.log("delivery==", rawVal);
        }
      },
    },
  },
  methods: {
    // setAddress(place) {
    //     const {latitude,longitude,route,street_number,postal_code,administrative_area_level_1,locality} = place
    //     if (!place) return;
    //     this.deliveryVal.address = `${street_number} ${route}`
    //     this.deliveryVal.city = locality
    //     this.deliveryVal.state = administrative_area_level_1
    //     this.deliveryVal.zipcode = postal_code
    //     this.deliveryVal.latitude = latitude
    //     this.deliveryVal.longitude = longitude
    // },
    setAddress(place) {
      if (!place) return;
      let address = place.formatted_address.split(", ").slice(0, -3).join(", ");
      if (!address) {
        address = place.formatted_address.split(", ")[0];
      }

      const city = place.address_components
        .filter((address) => {
          return address.types.includes("locality");
        })
        .map((address) => address.long_name)[0];

      const state = place.address_components
        .filter((address) => {
          return address.types.includes("administrative_area_level_1");
        })
        .map((address) => address.short_name)[0];

      const zipcode = place.address_components
        .filter((address) => address.types.includes("postal_code"))
        .map((address) => address.short_name)[0];

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      $("#map").val(address);
      this.deliveryVal.address = address;
      this.deliveryVal.city = city;
      this.deliveryVal.state = state;
      this.deliveryVal.zipCode = String(zipcode);
      this.deliveryVal.latitude = lat;
      this.deliveryVal.longitude = lng;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/utility.scss";

// Utility classes

textarea {
  resize: none;
}
</style>
