<template>
  <div>
    <div class="search-panel">
      <div>
        <!-- <gmap-autocomplete
          class="vs-inputx vs-input--input normal hasValue"
          placeholder="Origin city state"
          @place_changed="setPlace($event)"
          :options="googleMapAutoCompleteOptions"
          :select-first-on-enter="true"
        >
        </gmap-autocomplete> -->
        <template>
          <!-- <vue-google-autocomplete
            id="map"
            classname="form-control"
            placeholder="Start typing"
            v-on:placechanged="setPlace"
          >
          </vue-google-autocomplete> -->
          
        </template>
      </div>

      <span>to</span>
      <div>
        <!-- <gmap-autocomplete
          class="vs-inputx vs-input--input normal hasValue"
          placeholder="Destination city state"
          @place_changed="setPlace($event)"
          :options="googleMapAutoCompleteOptions"
          :select-first-on-enter="true"
        >
        </gmap-autocomplete> -->
      </div>
      <div>
        <flat-pickr
          class="w-full"
          placeholder="Origin date"
          v-model="originDate"
          :config="flat_pikr_config"
        />
      </div>
      <div>
        <flat-pickr
          class="w-full"
          placeholder="Destination date"
          v-model="destinationDate"
          :config="flat_pikr_config"
        />
      </div>
      <div>
        <button class="search-btn">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMapMixin from '../../../../src/mixings/googleMapMixin'
import config from '@/config/constants.js'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  name: 'SearchPanel',
  data() {
    return {
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      originDate: null,
      destinationDate: null,
      // Flat Pikr Config
      flat_pikr_config: {}
    }
  },
  components: {
    flatpickr,
    VueGoogleAutocomplete
  },
  mixins: [GoogleMapMixin],
  
  methods: {
    /*
     * Google Map Autocomplete
     */
    setPlace(place) {
      if (!place) return

      let address = place.formatted_address.split(', ').slice(0, -3).join(', ')

      if (!address) {
        address = place.formatted_address.split(', ')[0]
      }

      const city = place.address_components
        .filter((address) => {
          return address.types.includes('locality')
        })
        .map((address) => address.long_name)[0]

      const state = place.address_components
        .filter((address) => {
          return address.types.includes('administrative_area_level_1')
        })
        .map((address) => address.short_name)[0]

      const zipcode = place.address_components
        .filter((address) => address.types.includes('postal_code'))
        .map((address) => address.short_name)[0]

      const latitude = place.geometry.location.lat()
      const longitude = place.geometry.location.lng()

      //   const refObject = {
      //     shipper: this.shippers_and_freight_details[index],
      //     receiver: this.receivers[index],
      //     leg: this.legs[index],
      //   }[type];

      //   if (!refObject) return;

      //   this.$set(refObject, "address", address);
      //   this.$set(refObject, "city", city);
      //   this.$set(refObject, "state", state);
      //   this.$set(refObject, "zip_code", zipcode);
      //   this.$set(refObject, "latitude", latitude);
      //   this.$set(refObject, "longitude", longitude);
      //   this.$forceUpdate();
    }
  }
}
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
</style>
