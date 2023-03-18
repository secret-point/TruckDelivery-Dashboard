<template>
  <div class="route">
    <truckpedia-header v-if="showOnAuth"></truckpedia-header>
    <notifications position="bottom right"  />
    <RouterView />
  </div>
</template>
<script>
import truckpediaHeader from './views/homepage/components/Header.vue';

export default {
  components: {
    truckpediaHeader,
  },
  computed: {
    showOnAuth() {
      if (this.$route.name === 'login' || this.$route.name === 'register') {
        return false
      }
      return true
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.vue-notification {
  // styling
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;

  // default (blue)
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  // types (green, amber, red)
  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}</style>
