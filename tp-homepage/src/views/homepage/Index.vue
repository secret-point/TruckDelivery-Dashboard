<template>
  <div>
    <search-panel
      @address="address"
      @originDate="originDate"
      @destinationDate="destinationDate"
      @search="searchResult"
    ></search-panel>
    <div class="d-flex justify-center pa-15">
      <img src="@/assets/images/map.png" />
    </div>

    <trucks-list :availableTrucks="searchData"></trucks-list>
    <notifications position="bottom right" />
  </div>
</template>

<script>
import TrucksList from './components/TrucksList.vue'
import SearchPanel from './components/SearchPanel.vue'
import TruckpediaHeader from './components/Header.vue'

export default {
  components: { SearchPanel, TrucksList, TruckpediaHeader },
  name: 'TruckpediaHomepage',
  data() {
    return {
      originPlace: {},
      destinationPlace: null,
      startDate: null,
      endDate: null,
      searchData: [],
      validationAlert: false
    }
  },
  methods: {
    originDate(date) {
      this.startDate = date
    },
    destinationDate(date) {
      this.endDate = date
    },
    address(address) {
      if (address.type === 'origin') {
        this.originPlace = address
      }
      if (address.type === 'destination') {
        this.destinationPlace = address
      }
    },

    calculateDistance(lat1, lng1, lat2, lng2) {
      const radius = 6371 // Earth's radius in km
      const dLat = this.toRadians(lat2 - lat1)
      const dLng = this.toRadians(lng2 - lng1)
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRadians(lat1)) *
          Math.cos(this.toRadians(lat2)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      const distance = radius * c
      const miles = distance * 0.621371
      return miles.toFixed(2)
    },
    toRadians(degree) {
      return degree * (Math.PI / 180)
    },
    searchResult() {
      if (!this.startDate || !this.endDate || !this.originPlace || !this.destinationPlace) {
        this.$notify({
          type: 'error',
          title: 'Error',
          text: 'All fields are required.'
        })
        return
      }
      const origin = this.originPlace.place
      const destination = this.destinationPlace.place
      const distance = this.calculateDistance(
        origin.latitude,
        origin.longitude,
        destination.latitude,
        destination.longitude
      )
      const payload = {
        origin: {
          city: origin.administrative_area_level_2,
          state: origin.administrative_area_level_1,
          latitude: origin.latitude,
          longitude: origin.longitude,
          startDate: this.startDate,
          endDate: this.endDate
        },
        destination: {
          city: destination.administrative_area_level_2,
          state: destination.administrative_area_level_1,
          latitude: destination.latitude,
          longitude: destination.longitude
        },
        distance: Number(distance)
      }
      this.$http.post('truckpedia/available-trucks/search', payload).then(({ data }) => {
        this.searchData = data.payload
      })
    }
  }
}
</script>
