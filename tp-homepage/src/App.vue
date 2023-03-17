
<template>
  <div class="route"> 
    <truckpedia-header></truckpedia-header>
    <RouterView />
  </div>
</template>
<script>
import truckpediaHeader from "./views/homepage/components/Header.vue";
export default {
  components: {
    truckpediaHeader
  }
}
</script>
<style lang="scss">

</style>