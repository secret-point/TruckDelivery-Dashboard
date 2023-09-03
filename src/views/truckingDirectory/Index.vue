<template>
  <div class="page-container">
    <v-container>
      <v-row>
        <p class="page-header">Top Trucking Companies</p>
      </v-row>
      <v-row>
        <!-- Filter Section -->
        <v-col cols="3">
          <Filters :filterList="filterList" @filters-selected="applyFilters" />
          <div v-if="error" class="error-message">{{ error }}</div>
        </v-col>

        <!-- Company Profile List Section -->
        <v-col cols="9">
          <v-row v-if="companies.length > 0">
            <Company :paginatedCompanies="companies" />
          </v-row>
          <v-row v-else>
            <p class="placeholder">No companies to display.</p>
          </v-row>
          <v-pagination
            v-model="currentPage"
            :total-visible="4"
            :length="totalPages"
            rounded="0"
            dark
            class="pagination-bar"
            @update:modelValue="paginate"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Filters from './Filters.vue';
import Company from './Company.vue';
import config from '../../config/constants';

export default {
  name: 'truckingDirectory',
  components: {
    Filters,
    Company,
  },
  data() {
    return {
      selectedFilters: [],
      companies: [],
      itemsPerPage: 25,
      currentPage: 1,
      totalCount: null,
      error: null,
    };
  },

  async created() {
    if (this.$route.query) {
      this.currentPage = Number(this.$route.query.page) || 1;
      this.selectedFilters = {
        state: this.$route.query.state,
        city: this.$route.query.city,
        dotNumber: this.$route.query.dotNumber,
        zipCode: this.$route.query.zipCode,
        name: this.$route.query.name,
      };
      await this.fetchCompanies();
    } else {
      await this.fetchCompanies();
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.totalCount / this.itemsPerPage);
    },

    filterList() {
      const stateArray = [];

      for (const abbreviation in config.usStates) {
        if (config.usStates.hasOwnProperty(abbreviation)) {
          stateArray.push({
            label: config.usStates[abbreviation],
            key: abbreviation,
          });
        }
      }

      return [
        {
          key: 'dotNumber',
          type: 'input',
          label: 'DOT number',
          items: '',
        },
        {
          key: 'name',
          type: 'input',
          label: 'Company name',
          items: '',
        },
        {
          key: 'state',
          type: 'dropdown',
          label: 'State',
          items: stateArray,
        },
        {
          key: 'city',
          type: 'input',
          label: 'City',
          items: '',
        },
        {
          key: 'zipCode',
          type: 'input',
          label: 'Zip Code',
          items: '',
        },
      ];
    },
  },
  methods: {
    async fetchCompanies() {
      const payload = {
        pageSize: this.itemsPerPage,
        page: this.currentPage,
        filters: { ...this.selectedFilters },
      };
      let response = await this.$store.dispatch(
        'fmcsaCarrier/getAllCarriers',
        payload
      );
      this.companies = response.carriers || [];
      this.totalCount = response.totalRecords;
    },

    async applyFilters(filteredItems) {
      const selectedFilter = filteredItems.value;
      this.selectedFilters[filteredItems.key] =
        selectedFilter.length > 0 ? selectedFilter : undefined;

      if (this.selectedFilters['city'] && !this.selectedFilters['state']) {
        this.error = 'Please select state along with the city.';
        return;
      }

      this.error = null;

      this.$router.push({
        path: this.$route.path,
        query: this.selectedFilters,
      });

      await this.fetchCompanies();
    },

    paginate() {
      this.$router.push({
        path: this.$route.path,
        query: { ...this.selectedFilters, page: this.currentPage },
      });

      this.fetchCompanies();
    },
  },
};
</script>

<style>
.page-container {
  background-color: #3975eb0d;
  color: #181818;
}

.page-header {
  font-size: 48px;
  padding: 16px 0px;
}

.pagination-bar {
  margin-top: 20px;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.placeholder {
  font-size: 18px;
  color: #555;
  padding: 16px;
  text-align: center;
  width: 100%;
}
</style>
