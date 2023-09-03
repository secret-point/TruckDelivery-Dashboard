<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="9">
          <div class="d-flex">
            <div class="flex-1-0 pa-2">
              <v-img
                :src="company.logo"
                height="100"
                aspect-ratio="1/1"
                width="100"
              >
                <template v-slot:placeholder>
                  <div class="blank-logo"></div>
                </template>
              </v-img>
            </div>
            <!-- Other company information -->
            <div class="flex-1-0 pa-2">
              <h2>{{ company.legalName }}</h2>
              <p>Carrier DOT: {{ company.dotNumber }}</p>
              <!-- <p>Docket: {{ company.mcNumber }}</p> -->
              <p>
                <v-icon icon="mdi-map-marker" size="xs" color="info"></v-icon>
                {{ company.phyStreet }}, {{ company.phyCity }},
                {{ company.phyState }} {{ company.phyZip }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="3" class="text-right">
          <v-btn @click="viewCompanyDetails(company)">View Details</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CompanyCard',
  props: {
    company: Object,
  },
  methods: {
    viewCompanyDetails(company) {
      this.$router.push({
        name: 'truckingDirectoryViewDetail',
        query: { fmcsaCarrierId: company.fmcsaCarrierId },
      });
    },
  },
};
</script>

<style>
.blank-logo {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
}
</style>
