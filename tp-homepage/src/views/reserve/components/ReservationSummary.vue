<template>
  <div class="summary-container">
    <!-- Header -->
    <div class="summary-header">
      <div class="w-full">
        <h3>SPOT EDGE TRUCKING</h3>
        <h4>MC-1153133</h4>
        <v-btn class="m-10px-auto" variant="outlined" color="primary" size="large"> $ 3210 </v-btn>
      </div>
    </div>

    <!-- Body -->
    <div class="summary-body">
      <div class="w-full">
        <div class="flex gap-10px m-5px-auto">
          <span class="label">Pick Up Date</span>
          <span class="value">Dec 9, 08:08 pm</span>
        </div>
        <div class="flex gap-10px m-5px-auto">
          <span class="label">Delivery</span>
          <span class="value">Dec 12, 02:26 pm</span>
        </div>
        <div class="flex gap-10px m-5px-auto">
          <span class="label">Max Weight</span>
          <span class="value">Sample</span>
        </div>
        <div class="flex gap-10px m-5px-auto">
          <span class="label">Truck Type</span>
          <span class="value">Van</span>
        </div>
      </div>

      <div class="w-full mt-10px">
        <div class="flex justify-between m-5px-auto">
          <span class="fee-label">Cleaning fee</span>
          <span class="fee-value">$195.00</span>
        </div>
        <v-divider />
        <div class="flex justify-between m-5px-auto">
          <span class="fee-label">Service fee</span>
          <span class="fee-value">$596.47</span>
        </div>
        <v-divider />
        <div class="flex justify-between m-5px-auto">
          <span class="fee-label">Occupancy taxes and fees</span>
          <span class="fee-value">$230.75</span>
        </div>
        <v-divider />

        <div class="flex justify-between m-10px-auto">
          <span class="text-lg font-semibold">Total before taxes</span>
          <span class="text-lg font-semibold">$5,296.47</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservationSummary',
  components: {},
  data() {
    return {
      rating: 5
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/utility.scss';

.summary-container {
  background-color: #f7f7f7;
  padding: 30px 20px;
  height: 96vh;

  .summary-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .summary-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
}

// Utility classes

.label {
  font-size: 14px;
  font-weight: 500;
  color: #9e9e9e;
}

.value {
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

.fee-label {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.fee-value {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}
</style>
