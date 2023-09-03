<template>
  <v-card>
    <v-card-title class="card-title">Authority</v-card-title>
    <v-card-text class="card-content">
      <v-row>
        <v-col cols="4">
          <v-table>
            <thead>
              <tr>
                <th>Authority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Common</td>
                <td>{{ companyInfo.commonAuthorityStatus }}</td>
              </tr>
              <tr>
                <td>Contract</td>
                <td>{{ companyInfo.contractAuthorityStatus }}</td>
              </tr>
              <tr>
                <td>Broker</td>
                <td>{{ companyInfo.brokerAuthorityStatus }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <!-- <v-col cols="4">
          <v-table>
            <thead>
              <tr>
                <th colspan="2">Authority Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Granted On</td>
                <td>{{ companyInfo.addDate }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col> -->
        <v-col cols="4">
          <v-table>
            <thead>
              <tr>
                <th>FMCSA Links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <a class="license-link">License and Insurance</a>
                </th>
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
  name: 'Authority',
  computed: {
    companyInfo() {
      return this.$store.state.fmcsaCarrier.selectedFmcsaCarrier;
    },
  },
};
</script>

<style>
.authority-section {
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
