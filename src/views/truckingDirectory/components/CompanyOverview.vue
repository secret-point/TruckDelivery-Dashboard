<template>
  <v-card>
    <v-card-title class="card-title">Company Overview</v-card-title>
    <v-card-text class="card-content">
      <v-row>
        <v-col cols="12">
          <!-- <p>
          </p> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-table>
            <thead>
              <tr>
                <th>Fleet size</th>
                <!-- <th>
                  Tractor(s) owned
                </th>
                <th>
                  Trailer(s) owned
                </th> -->
                <th>Total drivers</th>
                <!-- <th>Safety rating</th> -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ companyInfo.nbrPowerUnit }}</td>
                <!-- <td>1</td>
                <td>1</td> -->
                <td>{{ companyInfo.driverTotal }}</td>
                <!-- <td>N/A</td> -->
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CompanyOverview',
  computed: {
    companyInfo() {
      return this.$store.state.fmcsaCarrier.selectedFmcsaCarrier;
    },
  },
};
</script>

<style>
.card-title {
  font-size: 32px;
  padding: 16px;
}

.card-content {
  font-size: 20px;
}

p {
  line-height: 2em;
}

.card-content {
  .v-table > .v-table__wrapper > table > tbody > tr > td,
  .v-table > .v-table__wrapper > table > tbody > tr > th,
  .v-table > .v-table__wrapper > table > thead > tr > td,
  .v-table > .v-table__wrapper > table > thead > tr > th,
  .v-table > .v-table__wrapper > table > tfoot > tr > td,
  .v-table > .v-table__wrapper > table > tfoot > tr > th {
    padding: 0px;
    border-bottom: none;
    height: 40px;
  }
}
</style>
