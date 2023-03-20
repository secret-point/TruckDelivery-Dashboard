<template>
  <div>
    <div class="search-panel">
      <div>
        <vue-google-autocomplete
          id="map"
          class="custom-input"
          :country="['us', 'ca']"
          placeholder="Origin city state"
          v-on:placechanged="setPlace($event, 'origin')"
        >
        </vue-google-autocomplete>
      </div>

      <span>to</span>
      <div>
        <vue-google-autocomplete
          id="map1"
          class="custom-input"
          :country="['us', 'ca']"
          placeholder="Destination city state"
          v-on:placechanged="setPlace($event, 'destination')"
        >
        </vue-google-autocomplete>
      </div>
      <div>
        <flat-pickr
          class="custom-input"
          placeholder="Origin date"
          v-model="originDate"
          :config="flat_pikr_config"
        />
      </div>
      <div>
        <flat-pickr
          class="custom-input"
          placeholder="Destination date"
          v-model="destinationDate"
          :config="flat_pikr_config"
        />
      </div>
      <div>
        <button class="search-btn" @click="submit">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMapMixin from '../../../../src/mixings/googleMapMixin'
import config from '@/config/constants.js'
import flatPickr from 'vue-flatpickr-component'
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
    flatPickr,
    VueGoogleAutocomplete
  },
  mixins: [GoogleMapMixin],
  watch: {
    originDate: {
      handler(val) {
        this.$emit('originDate', val)
      }
    },
    destinationDate: {
      handler(val) {
        this.$emit('destinationDate', val)
      }
    }
  },
  methods: {
    /*
     * Google Map Autocomplete
     */
    setPlace(place, type) {
      if (!place) return
      this.$emit('address', { place, type })
    },
    submit() {
      this.$emit('search')
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
