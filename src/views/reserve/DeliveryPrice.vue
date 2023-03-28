<template>
  <section>
    <v-sheet class="pa-6" border rounded color="grey-lighten-3" height="" width="100%">
      <v-tabs fixed-tabs color="primary" v-model="tab">
        <v-tab value="flexible" key="1"> Flexible Delivery Date Price </v-tab>
        <v-tab value="guarantee" key="2"> Guarantee Delivery Date Price </v-tab>
      </v-tabs>
      <v-window v-model="tab" class="text-body-1 px-2">
        <v-window-item v-for="item in items" :key="item.id" :value="item.id">
          <div>
            <h3 class="my-3 mt-5">${{toFixed(truckDetails.rate, 2)}}</h3>
            <span class="d-flex justify-space-between">
              <p class="my-3">for 3- 5 days transit</p>
              <v-btn
                variant="flat"
                color="primary"
                size="large"
                @click="goToReserveInfo"
              >
                Next
              </v-btn>
            </span>
            <!-- <p class="my-2">Estimated Price <span class="text-red font-weight-bold">*</span></p>
            <div class="my-2 d-flex justify-space-between align-start">
              <v-text-field
            label="Outlined"
            single-line
            outlined
          ></v-text-field>
              <div>
                <input @blur="validate.estimatedPrice.$touch" v-model.number="estimatedPrice" type="number" height="48" width="472" placeholder="$" class="mr-5"/>
                <span v-if="validate.estimatedPrice.$error" class="text-red text-caption font-weight-bold">*required</span>
              </div>
              <v-btn variant="flat" color="primary" size="large" @click="goToReserveInfo">Reserve</v-btn>
            </div>
            <p class="my-2">You won’t be charged yet</p> -->
            <div class="my-5">
              <div class="py-5 d-flex justify-space-between align-center">
                <span>Service fee</span><span>${{serviceCharge}}</span>
              </div>
              <!-- <v-divider></v-divider>
              <div class="py-5 d-flex justify-space-between align-center">
                <span>Lorem ipsum</span><span>$596.47</span>
              </div>
              <v-divider></v-divider>
               <div class="py-5 d-flex justify-space-between align-center">
                <span>Lorem ipsum</span><span>$230.75</span>
              </div> -->
              <v-divider></v-divider>
              <div class="py-5 d-flex justify-space-between align-center">
                <span class="font-weight-black">Total </span><span class="font-weight-black">${{toFixed(truckDetails.rate, 2)}}</span>
              </div>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </v-sheet>
    <!-- <v-card  class="my-8">
      <p class="d-flex justify-center align-center text-body-2 py-4"><span class="mr-5 font-weight-black">This is a rere find . Jhon’s place on Truckpedia is usually fully boocked.</span><v-icon icon="mdi-diamond-stone" color="primary" size="x-large"></v-icon></p>
    </v-card> -->
  </section>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required} from '@vuelidate/validators'
import { toFixed } from "@/helpers/helper";

export default {
   setup () {
    return {
      validate: useVuelidate()
    }
  },
  validations () {
    return {
      estimatedPrice:{ required }
    }
  },
  name: 'DeliveryPrice',
   props:{
    truckDetails:{
      type:Object,
      default:()=>{}
    }
  },
  computed:{
    totalSum(){
      return (Number(this.estimatedPrice) + this.serviceCharge).toFixed(2);
    }
  },
  mounted(){
    if(this.truckDetails?.estimatedPrice){
      this.estimatedPrice = Number(this.truckDetails.estimatedPrice)
    }
  },
  data() {
    return {
      estimatedPrice:'',
      serviceCharge:0,
      tab: null,
      items: [
        {
          id: 'flexible',
          text: 'Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 'guarantee',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  },
  methods: {
    toFixed(val, decimal){
     return toFixed(val, decimal)
    },
    async goToReserveInfo(){
      // const isFormCorrect = await this.validate.$validate()
      //  if (!isFormCorrect){
      //   this.$notify({
      //       type: "error",
      //       title: "Error",
      //       text: "*Fields required",
      // });
      // return
      //  }
      const payload = {
        estimatedPrice: this.toFixed(this.truckDetails?.rate),
        deliveryType: this.tab,
      };
      this.$store.dispatch('truck/setDeliveryTypeAndEstimation',payload)
      this.$router.push('reserve-info')
    },
    toFixed(value) {
      if (typeof value === "number") {
        return toFixed(value, 2);
      }
      return value;
    },
  }
}
</script>

<style scoped lang="scss">
input {
    width: 472px;
    height: 43px;
    border-radius: 4px;
    outline: 1px solid #D0D0D0;
    padding: 0 14px;
    background:white;
}
</style>