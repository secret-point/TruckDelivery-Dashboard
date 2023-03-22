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
          <keep-alive>
         <component ref="current" :is="currentComponent" @submit="reserveApi"  @updateDetails="updateDetails"/>
          </keep-alive>
 
        <!-- Footer -->
        <div class="mt-10px flex items-center justify-center gap-10px  bottom-0 w-full">
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
import { mapState } from "vuex";
import AdditionalInformation from './components/AdditionalInformation.vue'
import ReservationSummary from './components/ReservationSummary.vue'
import DeliveryDetails from './components/DeliveryDetails.vue'
import PaymentDetails from './components/PaymentDetails.vue'
import PickupDetails from './components/PickupDetails.vue'
import {toRaw } from 'vue';
import {calculateDistance} from '@/utils'
import _cloneDeep from 'lodash/cloneDeep'


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
     ...mapState('truck', ["truckDetails"]),
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
  // mounted(){
  //   console.log("refs==", _cloneDeep(this.$refs.current))
  // },
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
    
    async navigateForward() {
      // console.log("refs==", _cloneDeep(this.$refs.current))
      const currentComponent = _cloneDeep(this.$refs.current)
      // console.log("refs.$v==", currentComponent.v$)
      // return
      const isFormCorrect  = await currentComponent.v$.$validate()
      if (!isFormCorrect){
        this.$notify({
            type: "error",
            title: "Error",
            text: "*Fields required",
      });
      return;
      }
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
        const start = (info?.startTime?.firstPart ?? '')
        var startRange;
        if(start){
           startRange = `${info?.startTime?.firstPart}:${info?.startTime?.lastPart}`
        }else{
          startRange = null
        }

        const stop = (info?.stopTime?.firstPart ?? '')
        var stopRange;
        if(stop){
           stopRange = `${info?.stopTime?.firstPart}:${info?.stopTime?.lastPart}`
        }else{
          stopRange = null
        }


        return {name:name,contactPerson:`${firstName} ${lastName}`,date:info && info.date,startTime:startRange,endTime:stopRange,...rest}
    },
    reserveApi() {
      const truckDetails = toRaw(this.truckDetails)
      const pickUpDetails = this.createPayload(this.pickVal,this.info.pickUp,'Shipper')
      const deliveryDetails = this.createPayload(this.deliveryVal,this.info.delivery,'Receiver')
      const miles = calculateDistance(this.pickVal.latitude,this.pickVal.longitude,this.deliveryVal.latitude,this.deliveryVal.longitude)
      const payload = {
        comapnyId: truckDetails.id,
        deliveryType: truckDetails.deliveryType,
        estimatedPrice: truckDetails.estimatedPrice,
        additionalInformation: {
          // loadUniqueId: 1232,
          estimatedShipmentValue: this.info.shipment,
          itemDescription: this.info.description,
          totalMiles: miles,
          calculateUsing: 'google_maps'
        },
        pickupDetails: [
         pickUpDetails
        ],
        deliveryDetails: [
         deliveryDetails
        ]
      }
      console.log("final-payload==",payload)
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
