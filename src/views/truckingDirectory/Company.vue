<template>
  <v-col v-for="company in paginatedCompanies" :key="company.id" cols="12">
    <CompanyCard
      :company="company"
      @view-company-details="viewCompanyDetails"
    />
  </v-col>
</template>

<script>
import CompanyCard from './components/CompanyCard.vue';

export default {
  name: 'Company',
  props: {
    paginatedCompanies: Object,
  },
  methods: {
    viewCompanyDetails(company) {},
  },
  components: { CompanyCard },
};
</script>
