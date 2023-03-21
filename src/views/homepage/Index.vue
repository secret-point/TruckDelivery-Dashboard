<template>
  <div>
    <search-panel
      @address="address"
      @searchDataRange="searchDataRange"
      @search="searchResult"
    ></search-panel>
    <div class="d-flex justify-center pa-15">
      <img src="@/assets/images/map.png" />
    </div>

    <trucks-list
      :availableTrucks="searchData"
      :origin="originPlace?.place"
      :destination="destinationPlace?.place"
      :date="date"
    ></trucks-list>
    <notifications position="bottom right" />
  </div>
</template>

<script>
import TrucksList from "./components/TrucksList.vue";
import SearchPanel from "./components/SearchPanel.vue";
import TruckpediaHeader from "./components/Header.vue";
import { calculateDistance } from "@/helpers/helper";
export default {
  components: { SearchPanel, TrucksList, TruckpediaHeader },
  name: "TruckpediaHomepage",
  data() {
    return {
      originPlace: null,
      destinationPlace: null,
      date: "",
      searchData: [],
      validationAlert: false,
    };
  },
  methods: {
    searchDataRange(date) {
      this.date = date;
    },
    address(address) {
      if (address.type === "origin") {
        this.originPlace = address;
      }
      if (address.type === "destination") {
        this.destinationPlace = address;
      }
    },

    checkValidation(value) {
      if (["", null, undefined].indexOf(value) === -1) {
        return false;
      }
      return true;
    },
    searchResult() {
      // if (!this.date || !this.originPlace || !this.destinationPlace) {
      //   this.$notify({
      //     type: "error",
      //     title: "Error",
      //     text: "All fields are required.",
      //   });
      //   return;
      // }
      if (
        this.checkValidation(this.date) ||
        this.checkValidation(this.originPlace) ||
        this.checkValidation(this.destinationPlace)
      ) {
        this.$notify({
          type: "error",
          title: "Error",
          text: "All fields are required.",
        });
        return;
      } else {
        const origin = this.originPlace.place;
        const destination = this.destinationPlace.place;
        const distance = calculateDistance(
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
            startDate: this.date.split("to")[0],
            endDate: this.date.split("to")[1]
              ? this.date.split("to")[1]
              : this.date.split("to")[0],
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
      }
    },
  },
};
</script>
