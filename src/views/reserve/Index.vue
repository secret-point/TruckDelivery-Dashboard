<template>
  <v-container>
    <v-row>
      <!-- Left Section -->
      <v-col cols="4">
        <ReservationSummary />
      </v-col>

      <!-- Right Section -->
      <v-col class="relative" cols="8">
        <!-- Header -->
        <div>
          <span class="text-base font-semibold text-gray-700">{{ headerText }}</span>
          <v-progress-linear class="mt-10px" :model-value="progressValue" color="primary" />
        </div>

        <!-- Body -->
        <component :is="currentComponent" @submit="reserveApi" />

        <!-- Footer -->
        <div class="mt-10px flex items-center justify-center gap-10px absolute bottom-0 w-full">
          <v-btn color="primary" variant="outlined" @click.stop="navigateBackward">
            Previous
          </v-btn>
          <v-btn :disabled="currentStep == 4" color="primary" @click.stop="navigateForward">
            Next
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import AdditionalInformation from './components/AdditionalInformation.vue'
import ReservationSummary from './components/ReservationSummary.vue'
import DeliveryDetails from './components/DeliveryDetails.vue'
import PaymentDetails from './components/PaymentDetails.vue'
import PickupDetails from './components/PickupDetails.vue'

export default {
  name: 'Index',
  components: {
    AdditionalInformation,
    ReservationSummary,
    DeliveryDetails,
    PaymentDetails,
    PickupDetails
  },
  computed: {
    headerText() {
      const labels = {
        1: 'Additional information',
        2: 'Pickup details',
        3: 'Delivery details',
        4: 'Payment details'
      }

      return labels[this.currentStep] ?? ''
    },
    currentComponent() {
      return this.components[this.currentStep] ?? null
    },
    progressValue() {
      return (this.currentStep / Object.keys(this.components).length) * 100
    }
  },
  data() {
    return {
      components: {
        1: 'AdditionalInformation',
        2: 'PickupDetails',
        3: 'DeliveryDetails',
        4: 'PaymentDetails'
      },
      currentStep: 1
    }
  },
  methods: {
    navigateForward() {
      if (this.currentStep < Object.keys(this.components).length) {
        this.currentStep++
      }
    },
    navigateBackward() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },
    reserveApi() {
      console.log("enter")
      const payload = {
        comapnyId: 23,
        deliveryType: 'flexible',
        estimatedPrice: 200,
        additionalInformation: {
          loadUniqueId: 1232,
          estimatedShipmentValue: 120,
          itemDescription: 'These are metal sheets',
          totalMiles: 300,
          calculateUsing: 'p'
        },
        pickupDetails: [
          {
            name: 'Shipper',
            address: '450 Lakeville Rd',
            city: 'Lake Success',
            state: 'NY',
            zipCode: '11042',
            latitude: 40.7557536,
            longitude: -73.7021789,
            contactPerson: 'Hitesh',
            phone: '7022331233',
            email: 'hiteshkr8750@gmail.com',
            date: '2023-03-18',
            startTime: '02:00',
            endTime: '05:32',
            specialInstruction: 'This is a shipper notes.',
            reference: 'ADBC123456'
          }
        ],
        deliveryDetails: [
          {
            name: 'Receiver',
            address: '500 W Madison St',
            city: 'Chicago',
            state: 'IL',
            zipCode: '60661',
            latitude: 41.8822847,
            longitude: -87.6402818,
            contactPerson: 'Vikas',
            phone: '8750234138',
            email: 'hitesh.kumar@ezpapel.com',
            date: '2023-03-20',
            startTime: '01:21',
            endTime: '03:32',
            specialInstruction: 'This is a receiver notes.',
            reference: 'XYZ9857634'
          }
        ]
      }
      this.$http.post('truckpedia/reserved', payload).then((data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/utility.scss';
</style>
