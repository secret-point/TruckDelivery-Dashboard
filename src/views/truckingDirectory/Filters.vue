<template>
  <h2>Filters</h2>
  <div
    v-for="(filterItem, index) in filterList"
    class="filter-subsection"
    :key="index"
  >
    <Filter :filterItem="filterItem" @filters-selected="applyFilters" />
  </div>
</template>

<script>
import Filter from './components/Filter.vue';

export default {
  name: 'Filters',
  props: {
    filterList: Array,
  },
  emits: ['filters-selected'],
  components: { Filter },
  mounted() {},
  methods: {
    applyFilters(filteredItems) {
      this.$emit('filters-selected', filteredItems);
    },
  },
};
</script>

<style>
.filter-subsection {
  padding-top: 16px;
}
</style>
