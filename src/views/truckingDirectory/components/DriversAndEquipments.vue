<template>
  <v-card>
    <v-card-title class="card-title">Drivers & Equipments</v-card-title>
    <v-card-text class="card-content">
      <v-row>
        <v-col cols="4">
          <v-table>
            <tbody>
              <tr>
                <td>Total Drivers</td>
                <td>{{ companyInfo.driverTotal }}</td>
              </tr>
              <tr>
                <td>Total Power Units</td>
                <td>{{ companyInfo.nbrPowerUnit }}</td>
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
  name: 'DriversAndEquipments',

  computed: {
    companyInfo() {
      return this.$store.state.fmcsaCarrier.selectedFmcsaCarrier;
    },
  },
};
</script>

<style>
.drivers-section {
  .v-table > .v-table__wrapper > table {
    border-collapse: collapse;
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td,
  .v-table > .v-table__wrapper > table > tbody > tr > th,
  .v-table > .v-table__wrapper > table > thead > tr > td,
  .v-table > .v-table__wrapper > table > thead > tr > th,
  .v-table > .v-table__wrapper > table > tfoot > tr > td,
  .v-table > .v-table__wrapper > table > tfoot > tr > th {
    height: 30px;
    font-size: 14px;
    padding: 4px;
    border: 1px solid #e8e8e8;
  }

  .v-table > .v-table__wrapper > table > thead > tr > th,
  .v-table > .v-table__wrapper > table > tbody > tr > th {
    border: none;
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td:first-child {
    background-color: #f6f6f6;
  }

  .license-link {
    color: #3975eb;
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
