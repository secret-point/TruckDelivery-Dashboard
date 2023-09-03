<template>
  <h4>{{ filterItem.label }}</h4>
  <div v-if="filterItem.type === 'input'">
    <v-text-field
      v-model="inputValue"
      @update:modelValue="applyFilters"
    ></v-text-field>
  </div>
  <div v-if="filterItem.type === 'check'">
    <div
      v-for="(checkboxItem, itemIndex) in visibleItems"
      :key="itemIndex"
      class="filter-item"
    >
      <label>
        <input
          type="checkbox"
          v-model="checkboxItem.selected"
          @change="applyFilters"
        />
        {{ checkboxItem.label }}
      </label>
    </div>
    <p>
      <button class="show-all-btn" @click="toggleShowAll">
        {{ showAll ? 'Hide all' : 'Show all' }}
      </button>
    </p>
  </div>

  <v-select
    v-if="filterItem.type === 'dropdown'"
    v-model="selectedOption"
    :items="filterItem.items"
    item-title="label"
    item-value="key"
    @update:modelValue="applyFilters"
  >
  </v-select>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    filterItem: Object,
  },
  emits: ['filters-selected'],

  data() {
    return {
      showAll: false,
      selectedOption: null,
      inputValue: '',
    };
  },
  methods: {
    applyFilters() {
      if (this.filterItem.type === 'check') {
        this.$emit('filters-selected', this.filterItem);
      } else if (this.filterItem.type === 'dropdown') {
        this.$emit('filters-selected', {
          key: this.filterItem.key,
          value: this.selectedOption,
        });
      } else if (this.filterItem.type === 'input') {
        this.$emit('filters-selected', {
          key: this.filterItem.key,
          value: this.inputValue,
        });
      }
    },
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
  },
  computed: {
    visibleItems() {
      return this.showAll
        ? this.filterItem.items
        : this.filterItem.items.slice(0, 5);
    },
  },
};
</script>

<style>
.show-all-btn {
  color: #3975eb;
}

.filter-item {
  padding: 4px 0px;
}
</style>
