<template>
    <div>   
        <h1 class="mb-6">Still have questions?</h1>
    <div class="mb-6">
    <v-row>
      <v-col col="12" sm="12" md="6">
        <v-tabs direction="vertical" v-model="tab" color="primary">
          <v-tab value="option-1"> Frequently Asked Questions (General) </v-tab>
          <v-tab value="option-2"> Billing </v-tab>
          <v-tab value="option-3"> Claims </v-tab>
          <v-tab value="option-4"> Disputes </v-tab>
          <v-tab value="option-5"> Truckpedia Platform </v-tab>
          <v-tab value="option-6"> Shipping </v-tab>
          <v-tab value="option-7"> Tracking </v-tab>
        </v-tabs>
      </v-col>
      <v-col col="12" sm="12" md="6">
        <v-window v-model="tab">
          <v-window-item value="option-1">
            <FaqGeneral />
          </v-window-item>
          <v-window-item value="option-2">
            <FaqGeneral />
          </v-window-item>
          <v-window-item value="option-3">
              <FaqGeneral />
          </v-window-item>
          <v-window-item value="option-4">
              <FaqGeneral />
          </v-window-item>
          <v-window-item value="option-5">
              <FaqGeneral />
          </v-window-item>
          <v-window-item value="option-6">
              <FaqGeneral />
          </v-window-item>
          <v-window-item value="option-7">
              <FaqGeneral />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </div>
  </div>
</template>

<script>
import FaqGeneral from './FaqGeneral.vue';

export default {
  name: "FaqTabs",
    components: { 
        FaqGeneral 
    },
  data() {
    return {
      tab: "option-1",
      panel: [0],
      readonly: false,
    };
  },
};
</script>

<style scoped>
button{
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
}

.v-expansion-panel__shadow{
  display: none !important;
}
</style>
