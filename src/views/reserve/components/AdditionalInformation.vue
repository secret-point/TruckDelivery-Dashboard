<template>
  <div class="mt-30px">
    <div class="flex flex-col items-center justify-center w-full">
      <h3 class="">Additional information</h3>
      <div class="mt-20px w-full max-width-60-percent">
        <label class="text-sm">Estimated shipment value</label>
        <!-- <ValidationProvider  rules="positive" v-slot="{ errors }">
         <input type="number" v-model.number="info.shipment" class="custom-input" />
         <span>{{ errors[0] }}</span>
        </ValidationProvider> -->
        <input
          name="info"
          v-model="info.shipment"
          class="custom-input"
        />
      </div>
      <div class="mt-10px w-full max-width-60-percent">
        <label class="text-sm">Item Description</label>
        <input
          v-model="info.description"
          class="custom-input"
        />
        <label class="text-xs text-gray-400"
          >ex: some text about description</label
        >
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-20px">
      <h3 class="">When should we pick up your items?</h3>
      <div class="mt-20px w-full max-width-60-percent">
        <label class="text-sm">Requested loading date</label>
        <flat-pickr
          @blur="v$.info.pickUp.date.$touch"
          class="custom-input"
          v-model="info.pickUp.date"
          placeholder="Select date"
          :config="flat_pikr_config"
        />
        <span
          v-if="v$.info.pickUp.date.$error"
          class="text-red text-caption font-weight-bold mr-5"
          >*required</span
        >
        <label class="text-xs text-gray-400"
          >Subject to carrier acceptance and availability</label
        >
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-20px">
      <div class="flex max-width-60-percent">
        <!-- <v-icon size="large" color="orange-darken-2" icon="error_outline" /> -->
        <span class="text-sm font-semibold">
          Carriers may require up to 48 hours notice from the requested pickup
          date and time
        </span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-20px">
      <div class="w-full max-width-60-percent">
        <label class="text-sm">Requested loading hours</label>
        <div class="flex items-center">
          <div class="flex gap-5px items-center">
            <flat-pickr
              v-model="info.pickUp.startTime"
              :config="configTimeFlatPickr"
              class="custom-input"
            />
            <!-- <input
              v-model="info.pickUp.startTime.firstPart"
              class="custom-input"
              type="number"
              :min="1"
              :max="24"
            />
            <label>:</label>
            <input
              v-model="info.pickUp.startTime.secondPart"
              class="custom-input"
              type="number"
              :min="0"
              :max="59"
            /> -->
          </div>
          <div class="mx-10px">
            <label class="text-sm">to</label>
          </div>
          <div class="flex gap-5px items-center">
            <flat-pickr
              v-model="info.pickUp.stopTime"
              :config="configTimeFlatPickr"
              class="custom-input"
            />
            <!-- <input
              v-model.number="info.pickUp.stopTime.firstPart"
              class="custom-input"
              type="number"
              :min="1"
              :max="24"
            />
            <label>:</label>
            <input
              v-model.number="info.pickUp.stopTime.secondPart"
              class="custom-input"
              type="number"
              :min="0"
              :max="59"
            /> -->
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
            @blur="v$.info.delivery.date.$touch"
            class="custom-input"
            v-model="info.delivery.date"
            placeholder="Select date"
            :config="flat_pikr_config"
          />
          <span
            v-if="v$.info.delivery.date.$error"
            class="text-red text-caption font-weight-bold mr-5"
            >*required</span
          >
          <label class="text-xs text-gray-400"
            >Subject to carrier acceptance and availability</label
          >
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full mt-20px">
        <div class="flex max-width-60-percent">
          <!-- <v-icon size="large" color="orange-darken-2" icon="error_outline" /> -->
          <span class="text-sm font-semibold">
            Carriers may require up to 48 hours notice from the requested
            delivery date and time.
          </span>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full mt-20px">
        <div class="w-full max-width-60-percent">
          <label class="text-sm">Requested unloading hours</label>
          <div class="flex items-center">
            <div class="flex gap-5px items-center">
              <flat-pickr
                v-model="info.delivery.startTime"
                :config="configTimeFlatPickr"
                class="custom-input"
              />
              <!-- <input
                v-model="info.delivery.startTime.firstPart"
                class="custom-input"
                type="number"
                :min="1"
                :max="24"
              />
              <label>:</label>
              <input
                v-model="info.delivery.startTime.secondPart"
                class="custom-input"
                type="number"
                :min="0"
                :max="59"
              /> -->
            </div>
            <div class="mx-10px">
              <label class="text-sm">to</label>
            </div>
            <div class="flex gap-5px items-center">
              <flat-pickr
                v-model="info.delivery.stopTime"
                :config="configTimeFlatPickr"
                class="custom-input"
              />
              <!-- <input
                v-model="info.delivery.stopTime.firstPart"
                class="custom-input"
                type="number"
                :min="1"
                :max="24"
              />
              <label>:</label>
              <input
                v-model="info.delivery.stopTime.secondPart"
                class="custom-input"
                type="number"
                :min="0"
                :max="59"
              /> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { isProxy, toRaw } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      info: {
        pickUp: {
          date: { required },
        },
        delivery: {
          date: { required },
        },
      },
    };
  },
  name: "AdditionalInformation",
  components: {
    flatPickr,
    // ValidationProvider
  },

  data() {
    return {
      date: null,
      flat_pikr_config: {},
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      info: {
        shipment: "",
        description: "",
        pickUp: {
          date: "",
          startTime: "",
          stopTime: "",
        },
        delivery: {
          date: "",
          startTime: "",
          stopTime: "",
        },
      },
    };
  },
  watch: {
    info: {
      deep: true,
      handler: function (nv, ov) {
        if (isProxy(nv)) {
          const rawVal = toRaw(nv);
          const payload = { rawVal, type: "info" };
          this.$emit("updateDetails", payload);
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/utility.scss";
</style>
