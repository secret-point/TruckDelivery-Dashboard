<template>
  <v-card>
    <v-card-title class="card-title">Operations</v-card-title>
    <v-card-text class="card-content">
      <v-row>
        <v-col cols="3">
          <v-table>
            <tbody>
              <tr>
                <td>Entity Type</td>
                <td>Carrier</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <!-- <v-col cols="3">
          <v-table>
            <tbody>
              <tr>
                <td>Out of Service</td>
                <td>No</td>
              </tr>
            </tbody>
          </v-table>
        </v-col> -->
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-table>
            <tbody>
              <tr>
                <td>Operating Status</td>
                <td>
                  {{ companyInfo.operatingStatus }}
                </td>
              </tr>
              <tr>
                <td>Add Date</td>
                <td>{{ companyInfo.addDate }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-table>
            <thead>
              <tr>
                <th>Operations</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carrier Operation</td>
                <td>{{ companyInfo.carrierOperation }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col cols="3">
          <v-table>
            <thead>
              <tr>
                <th colspan="2">Classification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Authority for Hire</td>
                <td>
                  {{ companyInfo.authorizedForHire === true ? 'Yes' : 'No' }}
                </td>
              </tr>
              <tr>
                <td>Exempt for Hire</td>
                <td>{{ companyInfo.exemptForHire === true ? 'Yes' : 'No' }}</td>
              </tr>
              <tr>
                <td>Private Property</td>
                <td>
                  {{ companyInfo.privateProperty === true ? 'Yes' : 'No' }}
                </td>
              </tr>
              <tr>
                <td>Private Passenger Business</td>
                <td>
                  {{
                    companyInfo.privatePassengerBusiness === true ? 'Yes' : 'No'
                  }}
                </td>
              </tr>
              <tr>
                <td>Private Passenger Non-business</td>
                <td>
                  {{
                    companyInfo.privatePassengerNonBusiness === true
                      ? 'Yes'
                      : 'No'
                  }}
                </td>
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
  name: 'Operations',
  computed: {
    companyInfo() {
      return this.$store.state.fmcsaCarrier.selectedFmcsaCarrier;
    },
  },
};
</script>

<style>
.operations-section {
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
}
</style>
