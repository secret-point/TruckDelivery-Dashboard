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
import TrucksList from "./components/TrucksList.vue";
import SearchPanel from "./components/SearchPanel.vue";
import TruckpediaHeader from "./components/Header.vue";

export default {
  components: { SearchPanel, TrucksList, TruckpediaHeader },
  name: "TruckpediaHomepage",
  data() {
    return {
      originPlace: {},
      destinationPlace: null,
      startDate: null,
      endDate: null,
      searchData: [],
      validationAlert: false,
    };
  },
  methods: {
    originDate(date) {
      this.startDate = date;
    },
    destinationDate(date) {
      this.endDate = date;
    },
    address(address) {
      if (address.type === "origin") {
        this.originPlace = address;
      }
      if (address.type === "destination") {
        this.destinationPlace = address;
      }
    },

    calculateDistance(lat1, lng1, lat2, lng2) {
      const radius = 6371; // Earth's radius in km
      const dLat = this.toRadians(lat2 - lat1);
      const dLng = this.toRadians(lng2 - lng1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRadians(lat1)) *
          Math.cos(this.toRadians(lat2)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = radius * c;
      const miles = distance * 0.621371;
      return miles.toFixed(2);
    },
    toRadians(degree) {
      return degree * (Math.PI / 180);
    },
    searchResult() {
      if (
        !this.startDate ||
        !this.endDate ||
        !this.originPlace ||
        !this.destinationPlace
      ) {
        this.$notify({
          type: "error",
          title: "Error",
          text: "All fields are required.",
        });
        return;
      }
      const origin = this.originPlace.place;
      const destination = this.destinationPlace.place;
      const distance = this.calculateDistance(
        origin.lat,
        origin.lng,
        destination.lat,
        destination.lng
      );
      const payload = {
        origin: {
          city: origin.city,
          state: origin.state,
          latitude: origin.lat,
          longitude: origin.lng,
          startDate: this.startDate,
          endDate: this.endDate,
        },
        destination: {
          city: destination.city,
          state: destination.state,
          latitude: destination.lat,
          longitude: destination.lng,
        },
        distance: Number(distance),
      };
      this.$http
        .post("truckpedia/available-trucks/search", payload)
        .then(({ data }) => {
          this.searchData = data.payload;
        })
        .catch((error) => {
          this.$notify({
            type: "error",
            title: "Error",
            text: error.response.data.message,
          });
        });
    },
  },
};
</script>
