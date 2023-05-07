<template>
  <section>
    <h3 class="mt-6 mb-4">What this carrier offers</h3>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="list in OfferList"
        :key="list"
        :title="list"
        text=""
      ></v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script>
export default {
  name:"Offers",
  data(){
    return{
      OfferList:[
      "Automatic update",
      "Live tracking link",
      "Well-maintained equipment",
      "15 years in business"
    ]
    }
  }
  

}
</script>

<style>

</style>