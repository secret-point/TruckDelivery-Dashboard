<template>
  <v-card>
    <v-card-title class="card-title">Inspections & Crash</v-card-title>
    <v-card-text class="card-content">
      <v-row>
        <v-col cols="8">
          <v-table>
            <thead>
              <tr>
                <th colspan="4">US Inspection Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th>Vehicle</th>
                <th>Driver</th>
                <th>Hazmat</th>
              </tr>
              <tr>
                <td>Inspections</td>
                <td>{{ companyInfo.vehicleInsp }}</td>
                <td>{{ companyInfo.driverInsp }}</td>
                <td>{{ companyInfo.hazmatInsp }}</td>
              </tr>
              <tr>
                <td>Out of Service</td>
                <td>{{ companyInfo.vehicleOosInsp }}</td>
                <td>{{ companyInfo.driverOosInsp }}</td>
                <td>{{ companyInfo.hazmatOosInsp }}</td>
              </tr>
              <tr>
                <td>Out of Service %</td>
                <td>{{ this.vehicleOosRate }}%</td>
                <td>{{ this.driverOosRate }}%</td>
                <td>{{ this.hazmatOosRate }}%</td>
              </tr>
              <tr>
                <td>Nat’l Avg (07/28/2023)</td>
                <td>22.26%</td>
                <td>6.67%</td>
                <td>4.44%</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col cols="4">
          <v-table>
            <thead>
              <tr>
                <th colspan="2">US Crash Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="2">Crashes</th>
              </tr>
              <tr>
                <td>Fatal</td>
                <td>{{ companyInfo.fatalCrash }}</td>
              </tr>
              <tr>
                <td>Injury</td>
                <td>{{ companyInfo.injCrash }}</td>
              </tr>
              <tr>
                <td>Tow</td>
                <td>{{ companyInfo.towawayCrash }}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{{ totalCrash }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col cols="8">
          <v-table>
            <thead>
              <tr>
                <th colspan="4">
                  US Inspection Results
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th>Vehicle</th>
                <th>Driver</th>
                <th>Hazmat</th>
              </tr>
              <tr>
                <td>Inspections</td>
                <td>0</td>
                <td>0</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Out of Service</td>
                <td>0</td>
                <td>0</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Out of Service %</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>-</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col cols="4">
          <v-table>
            <thead>
              <tr>
                <th colspan="2">
                  Canadian Crash Results
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="2">Crashes</th>
              </tr>
              <tr>
                <td>Fatal</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Injury</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Tow</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>0</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row> -->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'InspectionAndCrash',
  computed: {
    companyInfo() {
      return this.$store.state.fmcsaCarrier.selectedFmcsaCarrier;
    },
    vehicleOosRate() {
      const { vehicleOosInsp, vehicleInsp } = this.companyInfo;
      if (vehicleInsp === 0) {
        return 0;
      } else {
        const vehicleOosRate = ((vehicleOosInsp / vehicleInsp) * 100).toFixed(
          1
        );
        return parseFloat(vehicleOosRate);
      }
    },
    driverOosRate() {
      const { driverOosInsp, driverInsp } = this.companyInfo;
      if (driverInsp === 0) {
        return 0;
      } else {
        const driverOosRate = ((driverOosInsp / driverInsp) * 100).toFixed(1);
        return parseFloat(driverOosRate);
      }
    },
    hazmatOosRate() {
      const { hazmatOosInsp, hazmatInsp } = this.companyInfo;
      if (hazmatInsp === 0) {
        return 0;
      } else {
        const hazmatOosRate = ((hazmatOosInsp / hazmatInsp) * 100).toFixed(1);
        return parseFloat(hazmatOosRate);
      }
    },
    totalCrash() {
      const { fatalCrash, injCrash, towawayCrash } = this.companyInfo;
      return fatalCrash + injCrash + towawayCrash;
    },
  },
};
</script>

<style>
.inspection-section {
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
    border-bottom: 1px solid #e8e8e8;
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td:first-child {
    background-color: #f6f6f6;
  }
}
</style>
