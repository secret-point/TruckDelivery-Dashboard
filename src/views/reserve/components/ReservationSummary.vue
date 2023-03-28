<template>
  <div class="summary-container">
    <!-- Header -->
    <div class="summary-header">
      <div class="w-full">
        <div class="flex">
          <img
            v-if="truckDetails.logoUrl"
            class="mr-4"
            :src="truckDetails.logoUrl"
            width="35"
            height="35"
            alt="logo"
          />
          <v-avatar
            v-else
            class="logo mr-4 color-white"
            rounded="0"
            color="#1877f1"
          >
            {{ getFirstLetter(truckDetails.name) }}
          </v-avatar>
          <h3>{{ truckDetails.name }}</h3>
        </div>
        <!-- <h4>MC-1153133</h4> -->
        <v-btn class="m-10px-auto" variant="outlined" color="primary" size="large"> ${{toFixed(truckDetails.rate, 2)}} </v-btn>
      </div>
    </div>

    <!-- Body -->
    <div class="summary-body">
      <div class="w-full">
        <div class="flex gap-10px m-5px-auto">
          <span class="label">Pick Up Date</span>
          <span class="value">{{truckDetails.date}}</span>
        </div>
        <!-- <div v-if="truckDetails.deliveryDate" class="flex gap-10px m-5px-auto">
          <span class="label">Delivery</span>
          <span class="value">{{getPretty(truckDetails.deliveryDate)}}</span>
        </div> -->
        <div class="flex gap-10px m-5px-auto">
          <span class="label">Max Weight</span>
          <span class="value">{{truckDetails.maxWeight}}</span>
        </div>
        <div class="flex gap-10px m-5px-auto">
          <span class="label">Truck Type</span>
          <span class="value">Van</span>
        </div>
      </div>

      <div class="w-full mt-10px">
        <!-- <div class="flex justify-between m-5px-auto">
          <span class="fee-label">Cleaning fee</span>
          <span class="fee-value">$195.00</span>
        </div> -->
        <!-- <v-divider /> -->
        <div class="flex justify-between m-5px-auto">
          <span class="fee-label">Service fee</span>
          <span class="fee-value">${{serviceCharge}}</span>
        </div>
        <!-- <v-divider /> -->
        <!-- <div class="flex justify-between m-5px-auto">
          <span class="fee-label">Occupancy taxes and fees</span>
          <span class="fee-value">$230.75</span>
        </div> -->
        <v-divider />

        <div class="flex justify-between m-10px-auto">
          <span class="text-lg font-semibold">Total</span>
          <span class="text-lg font-semibold">${{toFixed(truckDetails.rate)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirstLetter } from "@/helpers/helper";
import { toFixed } from '../../../helpers/helper';

export default {
  name: 'ReservationSummary',
  props:{
    truckDetails:{
      type:Object,
      default:()=>{}
    }
  },
  data() {
    return {
      rating: 5,
      serviceCharge:0
    }
  },
   computed:{
    totalSum(){
      return (Number(this.truckDetails.estimatedPrice) + this.serviceCharge).toFixed(2);
    }
  },

  methods: {
    toFixed(val, decimal){
     return toFixed(val, decimal)
    },
    getPretty(date){
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const d = new Date(date)
      return `${months[d.getMonth()]} ${d.getDate()}`
    },
    getFirstLetter(value) {
      return getFirstLetter(value);
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

.logo {
  width: 35px;
  height: 35px;
}

.color-white {
  color: #fff;
}
</style>
