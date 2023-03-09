<template>
  <div>
    <truckpedia-header></truckpedia-header>
    <search-panel></search-panel>
    <!-- <trucks-list></trucks-list> -->
  </div>
</template>

<script>
import TrucksList from "./components/TrucksList.vue";
import SearchPanel from "./components/SearchPanel.vue";
import TruckpediaHeader from "./components/Header.vue";
export default {
  components: { SearchPanel, TrucksList, TruckpediaHeader },
  name: "TruckpediaHomapage",
  mounted(){
   console.log("enter")
  }, 
  methods: {
      // trucks(){
      //   this.$store.dispatch("truckpedia/getTruckpediaAvailableTrucks").then((data) => {
      //     console.log(data);
      //   })
      // }
  }
};
</script>
