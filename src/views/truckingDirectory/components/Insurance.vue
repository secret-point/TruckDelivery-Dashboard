<template>
  <v-card>
    <v-card-title class="card-title">Insurance</v-card-title>
    <v-card-text class="card-content">
      <!-- <v-row>
        <v-col cols="8">
          <v-table>
            <thead>
              <tr>
                <th>Underwriter</th>
                <th>A.M. Best</th>
                <th>Type</th>
                <th>Policy Number</th>
                <th>Expire Date</th>
                <th>Policy Limit</th>
                <th>Deductible / Reefer Ded.</th>
                <th>Certificate View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>CertData is not active.</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col cols="4">
          <v-table>
            <tbody>
              <tr>
                <th>
                  Insurance Links
                </th>
              </tr>
              <tr>
                <th>
                  <a class="license-link">FMCSA Licensing and Insurance</a>
                </th>
              </tr>
              <tr>
                <th>
                  <a class="license-link">A.M. Best Disclaimer (PDF)</a>
                </th>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="3">
          <v-table>
            <tbody>
              <tr>
                <th colspan="2">BIPD Insurance</th>
              </tr>
              <tr>
                <td>Required</td>
                <td>
                  {{ this.times1000(this.companyInfo.bipdRequiredAmount) }}
                </td>
              </tr>
              <tr>
                <td>Filed</td>
                <td>
                  {{ this.times1000(this.companyInfo.bipdInsuranceOnFile) }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <!-- <v-col cols="3">
          <v-table>
            <tbody>
              <tr>
                <th colspan="2">Bond Insurance</th>
              </tr>
              <tr>
                <td>Required</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Filed</td>
                <td>No</td>
              </tr>
            </tbody>
          </v-table>
        </v-col> -->
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Insurance',
  computed: {
    companyInfo() {
      return this.$store.state.fmcsaCarrier.selectedFmcsaCarrier;
    },
  },
  methods: {
    times1000(value) {
      if (value) {
        return (value * 1000).toLocaleString();
      }
      return 0;
    },
  },
};
</script>

<style>
.insurance-section {
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

  .v-table > .v-table__wrapper > table > thead > tr > th {
    background-color: #dadada;
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td:first-child {
    background-color: #f6f6f6;
  }
}
</style>
