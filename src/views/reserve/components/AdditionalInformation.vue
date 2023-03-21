<template>
  <div class="mt-30px">
    <div class="flex flex-col items-center justify-center w-full">
      <h3 class="">Additional information</h3>
      <div class="mt-20px w-full max-width-60-percent">
        <label class="text-sm">Estimated shipment value</label>
        <input type="number" v-model.number="info.shipment" class="custom-input" placeholder="$100000" />
      </div>
      <div class="mt-10px w-full max-width-60-percent">
        <label class="text-sm">Item Description</label>
        <input v-model="info.description" class="custom-input" placeholder="Some text" />
        <label class="text-xs text-gray-400">ex: some text about description</label>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-20px">
      <h3 class="">When should we pick up your items?</h3>
      <div class="mt-20px w-full max-width-60-percent">
        <label class="text-sm">Requested loading date</label>
        <flat-pickr
          class="custom-input"
          v-model="info.pickUp.date"
          placeholder="1/5/2023"
          :config="flat_pikr_config"
        />
        <label class="text-xs text-gray-400">Subject to carrier acceptance and availability</label>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-20px">
      <div class="flex max-width-60-percent">
        <!-- <v-icon size="large" color="orange-darken-2" icon="error_outline" /> -->
        <span class="text-sm font-semibold">
          Carriers may require up to 48 hours notice from the requested pickup date and time
        </span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-20px">
      <div class="w-full max-width-60-percent">
        <label class="text-sm">Requested loading hours</label>
        <div class="flex items-center">
          <div class="flex gap-5px items-center">
            <input v-model="info.pickUp.startTime.FirstPart" class="custom-input" type="number" :min="1" :max="24" />
            <label>:</label>
            <input v-model="info.pickUp.startTime.secondPart" class="custom-input" type="number" :min="0" :max="59" />
          </div>
          <div class="mx-10px">
            <label class="text-sm">to</label>
          </div>
          <div class="flex gap-5px items-center">
            <input v-model="info.pickUp.stopTime.FirstPart" class="custom-input" type="number" :min="1" :max="24" />
            <label>:</label>
            <input v-model="info.pickUp.stopTime.secondPart" class="custom-input" type="number" :min="0" :max="59" />
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="flex flex-col items-center justify-center w-full mt-20px">
      <h3 class="">When should we deliver your items?</h3>
      <div class="mt-20px w-full max-width-60-percent">
        <label class="text-sm">Requested unloading date</label>
        <flat-pickr
          class="custom-input"
          v-model="info.delivery.date"
          placeholder="1/5/2023"
          :config="flat_pikr_config"
        />
        <label class="text-xs text-gray-400">Subject to carrier acceptance and availability</label>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-20px">
      <div class="flex max-width-60-percent">
        <!-- <v-icon size="large" color="orange-darken-2" icon="error_outline" /> -->
        <span class="text-sm font-semibold">
          Carriers may require up to 48 hours notice from the requested delivery date and time.
        </span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-20px">
      <div class="w-full max-width-60-percent">
        <label class="text-sm">Requested unloading hours</label>
        <div class="flex items-center">
          <div class="flex gap-5px items-center">
            <input v-model="info.delivery.startTime.FirstPart" class="custom-input" type="number" :min="1" :max="24" />
            <label>:</label>
            <input v-model="info.delivery.startTime.secondPart" class="custom-input" type="number" :min="0" :max="59" />
          </div>
          <div class="mx-10px">
            <label class="text-sm">to</label>
          </div>
          <div class="flex gap-5px items-center">
            <input v-model="info.delivery.stopTime.FirstPart" class="custom-input" type="number" :min="1" :max="24" />
            <label>:</label>
            <input v-model="info.delivery.stopTime.secondPart" class="custom-input" type="number" :min="0" :max="59" />
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { isProxy, toRaw } from 'vue';


export default {
  name: 'AdditionalInformation',
  components: {
    flatPickr
  },
  data() {
    return {
      date: null,
      flat_pikr_config: {},
      info:{
        shipment:'',
        description:'',
        pickUp:{
          date:'',
          startTime:{
            firstPart:'',
            secondPart:''
          },
          stopTime:{
            firstPart:'',
            secondPart:''
          }
        },
         delivery:{
          date:'',
          startTime:{
            firstPart:'',
            secondPart:''
          },
          stopTime:{
            firstPart:'',
            secondPart:''
          }
        }
      }
    }
  },
   watch:{
    info:{
      deep:true,
      handler:function(nv,ov){
        if(isProxy(nv)){
          const rawVal = toRaw(nv)
          const payload = { rawVal ,type:'info'}
          this.$emit('updateDetails', payload)
          console.log("info==",rawVal)
        }
      }
    }
   
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/utility.scss';
</style>
