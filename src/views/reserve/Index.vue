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
      
         <component :is="currentComponent" @submit="reserveApi"  @updateDetails="updateDetails"/>
 
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
      currentStep: 1,
      pickVal:{},
      deliveryVal:{},
      info:{}
    }
  },
  activated() {
        console.log('activated==');
    },
    deactivated() {
        console.log('deactivated==');
    },
  methods: {
    updateDetails(payload){
      console.log("final-d-p==",payload)
      if(payload.type==='deliver'){
        this.deliveryVal = payload.rawVal
      }else if(payload.type==='pickUp'){
        this.pickVal = payload.rawVal
      }else{
        this.info = payload.rawVal
      }
    },
    
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
    createPayload({company = '',firstName = '',lastName ='',...rest},info,name){
        return {name:name,contactPerson:`${firstName} ${lastName}`,date:info && info.date,startTime:`${info?.startTime?.firstPart}:${info?.startTime?.lastPart}`,endTime:`${info?.stopTime?.firstPart}:${info?.stopTime?.lastPart}`,...rest}
    },
    reserveApi() {
      const pickUpDetails = this.createPayload(this.pickVal,this.info.pickUp,'Shipper')
      const deliveryDetails = this.createPayload(this.deliveryVal,this.info.delivery,'Receiver')
      
      const payload = {
        comapnyId: 23,
        deliveryType: 'flexible',
        estimatedPrice: 200,
        additionalInformation: {
          loadUniqueId: 1232,
          estimatedShipmentValue: this.info.shipment,
          itemDescription: this.info.description,
          totalMiles: 300,
          calculateUsing: 'p'
        },
        pickupDetails: [
         pickUpDetails
        ],
        deliveryDetails: [
         deliveryDetails
        ]
      }
      console.log("api-payload",payload)
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
