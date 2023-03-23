<template>
  <div>
    <v-row>
      <v-col cols="6">
        <div class="mt-30px">
          <div class="flex flex-col w-full">
            <h3 class="">What is the pick-up address?</h3>
            <div class="mt-20px w-full">
              <label class="text-sm">Company or Individual name</label>
              <input
                type="text"
                v-model="pickVal.company"
                class="custom-input"
                placeholder="Your company name"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Address</label>
              <GMapAutocomplete
                name="map-pickup"
                placeholder="12345 address"
                class="custom-input"
                :country="['us', 'ca']"
                :value="pickVal.address"
                @place_changed="setAddress($event)"
              >
              </GMapAutocomplete>
              <span
                v-if="v$.pickVal.address.$error"
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
              <!-- <input class="custom-input" placeholder="12345 address line one" /> -->
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">City</label>
              <input
                v-model="pickVal.city"
                class="custom-input"
                placeholder="EI Monte"
              />
              <span
                v-if="v$.pickVal.city.$error"
                class="text-red text-caption font-weight-bold mr-5"
                >*required</span
              >

              <!-- <label class="text-xs text-gray-400">Apartment, Unit, Suite, etc.</label> -->
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">State</label>
              <input
                v-model="pickVal.state"
                class="custom-input"
                placeholder="CA"
              />
              <span
                v-if="v$.pickVal.state.$error"
                class="text-red text-caption font-weight-bold mr-5"
                >*required</span
              >

              <!-- <label class="text-xs text-gray-400">Seattle etc.</label> -->
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Zip code</label>
              <input
                v-model="pickVal.zipCode"
                class="custom-input"
                placeholder="91732"
              />
              <span
                v-if="v$.pickVal.zipCode.$error"
                class="text-red text-caption font-weight-bold mr-5"
                >*required</span
              >
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Pick-up reference number (optional)</label>
              <input
                v-model="pickVal.reference"
                class="custom-input"
                placeholder="1223243432423432"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Special instructions (optional)</label>
              <textarea
                v-model="pickVal.specialInstruction"
                class="custom-input"
                placeholder="Notes"
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
                v-model="pickVal.firstName"
                class="custom-input"
                placeholder="Hongshuai"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Last name</label>
              <input
                v-model="pickVal.lastName"
                class="custom-input"
                placeholder="Lu"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Phone</label>
              <input
                v-model="pickVal.phone"
                class="custom-input"
                placeholder="(626)831 8933"
              />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Email</label>
              <input
                v-model="pickVal.email"
                class="custom-input"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <!-- <div class="mt-10px flex gap-5px w-full">
              <input  type="checkbox" />
              <label  class="text-sm">Appointment required</label>
            </div> -->
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GoogleMapMixin from "../../../../src/mixings/googleMapMixin";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import config from "@/config/constants.js";
import { isProxy, toRaw, onActivated } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      pickVal: {
        address: { required },
        city: { required },
        state: { required },
        zipCode: { required },
        longitude: { required },
        latitude: { required },
      },
    };
  },
  name: "PickupDetails",
  mixins: [GoogleMapMixin],
  components: {
    VueGoogleAutocomplete,
  },
  // setup () {
  //   onActivated(()=>console.log("activated=="))
  // },
  data() {
    return {
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      trial: "",
      pickVal: {
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
        longitude: null,
        latitude: null,
        // isAppointment:false
      },
    };
  },
  watch: {
    pickVal: {
      deep: true,
      handler: function (nv, ov) {
        if (isProxy(nv)) {
          const rawVal = toRaw(nv);
          const payload = { rawVal, type: "pickUp" };
          this.$emit("updateDetails", payload);
        }
      },
    },
  },
  methods: {
    //     administrative_area_level_1: "NY"
    // administrative_area_level_2: "New York County"
    // country: "United States"
    // latitude: 40.7094756
    // locality: "New York"
    // longitude: -74.0072955
    // postal_code: "10038"
    // route: "William Street"
    // street_number: "123"
    //   setAddress(place) {
    //     console.log("event$",place)
    //     const {latitude,longitude,route,street_number,postal_code,administrative_area_level_1,locality} = place
    //     if (!place) return;
    //     this.pickVal.address = `${street_number} ${route}`
    //     this.pickVal.city = locality
    //     this.pickVal.state = administrative_area_level_1
    //     this.pickVal.zipcode = postal_code
    //     this.pickVal.latitude = latitude
    //     this.pickVal.longitude = longitude
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
        .map(
          (address) => address.short_name && parseInt(address.short_name)
        )[0];

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      this.pickVal.address = address;
      this.pickVal.city = city;
      this.pickVal.state = state;
      this.pickVal.zipCode = String(zipcode);
      this.pickVal.latitude = lat;
      this.pickVal.longitude = lng;
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
