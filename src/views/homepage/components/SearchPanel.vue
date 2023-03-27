<template>
     <form autocomplete="off"> 
  <div>
    <div class="search-panel">
      <div>
        <!-- <vue-google-autocomplete
          id="map"
          class="custom-input"
          :country="['us', 'ca']"
          placeholder="Origin city state"
          v-on:placechanged="setPlace($event, 'origin')"
          types="(cities)"
        >
        </vue-google-autocomplete> -->
        <GMapAutocomplete
          name="address"
          placeholder="Pickup city state"
          class="custom-input"
          :value="originAddress"
          :country="['us', 'ca']"
          @place_changed="setPlace($event, 'origin')"
          :options="googleMapAutoCompleteOptions"
          :select-first-on-enter="true"
        >
        </GMapAutocomplete>
      </div>

      <span>to</span>
      <div>
        <GMapAutocomplete
          name="address1"
          placeholder="Delivery city state"
          class="custom-input"
          :value="destinationAddress"
          :country="['us', 'ca']"
          @place_changed="setPlace($event, 'destination')"
          :options="googleMapAutoCompleteOptions"
          :select-first-on-enter="true"
        >
        </GMapAutocomplete>
        <!-- <vue-google-autocomplete
          id="map1"
          class="custom-input"
          :country="['us', 'ca']"
          placeholder="Destination city state"
          v-on:placechanged="setPlace($event, 'destination')"
          types="(cities)"
        >
        </vue-google-autocomplete> -->
      </div>
      <div>
        <flat-pickr
          class="custom-input"
          placeholder="Pickup date"
          v-model="date"
          :config="flat_pikr_config"
          @on-change="handleFlatPickerInput"
        />
      </div>
      <!-- <div>
        <flat-pickr
          class="custom-input"
          placeholder="Destination date"
          v-model="destinationDate"
          :config="flat_pikr_config"
        />
      </div> -->
      <div>
        <button class="search-btn" @click="submit">Search</button>
      </div>
    </div>
  </div>
</form>
</template>

<script>
import GoogleMapMixin from "../../../../src/mixings/googleMapMixin";
import config from "@/config/constants.js";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { formatDate } from "@/helpers/helper";

export default {
  name: "SearchPanel",
  props: {
    mapOriginState: {
      type: String,
    },
    mapDestinationState: {
      type: String,
    },
  },
  data() {
    return {
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      date: null,
      // Flat Pikr Config
      flat_pikr_config: {
        mode: "range",
        defaultDate: [],
      },
      destinationAddress: "",
      originAddress: "",
    };
  },
  components: {
    flatPickr,
    VueGoogleAutocomplete,
  },
  watch: {
    mapOriginState: {
      handler(val) {
        if (val === "undefined,undefined") return;
        this.originAddress = val;
        this.getLatLngFromAddress(val, "origin");
      },
    },
    mapDestinationState: {
      handler(val) {
        if (val === "undefined,undefined") return;
        this.destinationAddress = val;
        this.getLatLngFromAddress(val, "destination");
      },
    },
  },
  mixins: [GoogleMapMixin],
  methods: {
    getLatLngFromAddress(city, type) {
      var address = city;
      var geocoder = new google.maps.Geocoder();
      var THIS = this;
      geocoder.geocode({ address: address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          const city = address.split(",")[0];
          const state = address.split(",")[1];
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();

          THIS.updateGoogleCityState(city, state, lat, lng, type);
        } else {
          console.log(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    },
    handleFlatPickerInput(selectedDates, dateStr, instance) {
      if (!selectedDates && !dateStr) return;
      this.date = dateStr;

      const selectedDateFormat = dateStr.split(" to ");
      const startDate = new Date(selectedDateFormat[0]);
      const skipDay = 60;

      startDate.setDate(startDate.getDate() - skipDay);
      this.flat_pikr_config.minDate = formatDate(new Date(startDate));
      startDate.setDate(startDate.getDate() + skipDay * 2);
      this.flat_pikr_config.maxDate = formatDate(new Date(startDate));
      if (selectedDates.length >= 2) {
        this.flat_pikr_config.minDate = "";
        this.flat_pikr_config.maxDate = "";
      }
      this.$emit("searchDataRange", this.date);
    },
    updateGoogleCityState(city, state, lat, lng, type) {
      const place = { city, state, lat, lng };
      this.$emit("address", { place, type });
      if (type === "origin") {
        this.originAddress = city + ", " + state;
      } else {
        this.destinationAddress = city + ", " + state;
      }
    },
    /*
     * Google Map Autocomplete
     */
    setPlace(place, type) {
      if (!place) return;
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

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      if (city && state) {
        this.updateGoogleCityState(city, state, lat, lng, type);
      } else {
        this.updateGoogleCityState(
          place.formatted_address.split(",")[0],
          state,
          lat,
          lng,
          type
        );
      }
    },

    /*
     * Google Map Autocomplete
     */
    // setPlace(place, type) {
    //   if (!place) return;
    //   this.$emit("address", { place, type });
    // },
    submit() {
      this.$emit("search");
    },
  },
};
</script>

<style lang="scss" scoped>
.search-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
  .search-btn {
    background: #e7f0fb;
    color: #1877f2;
    border: none;
    padding: 10px 40px;
    border-radius: 5px;
    cursor: pointer;
  }
}

.custom-input {
  color: inherit;
  position: relative;
  padding: 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
  transition: all 0.3s ease;
  width: 100%;
}
</style>
