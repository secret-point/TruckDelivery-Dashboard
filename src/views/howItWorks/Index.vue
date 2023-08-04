<template>
  <div>
    <div>
      <div class="bg">
        <h1>You're just <span>3 steps away</span> from your next shipment</h1>
        <v-tabs v-model="tabs" grow show-arrows class="custom-tabs">
          <v-tab class="tab-item" value="shipper">For Shippers</v-tab>
          <v-tab class="tab-item" value="two">For Carriers</v-tab>
          <v-tab class="tab-item" value="three">For Brokers</v-tab>
        </v-tabs>
      </div>
    </div>
    <v-window v-model="tabs">
      <v-window-item value="shipper">
        <Shippers />
      </v-window-item>

      <v-window-item value="two">
        <Carrier />
      </v-window-item>

      <v-window-item value="three">
        <Brokers />
      </v-window-item>
    </v-window>
    <v-container class="mt-14">
      <FaqTabs />
    </v-container>
    </div>

</template>

<script>
import Brokers from './Brokers.vue';
import Carrier from './Carrier.vue';
import Shippers from './Shippers.vue';
import FaqTabs from "./components/faq/FaqTabs.vue";
export default {
  name: "how-it-works",
  data() {
    return {
      tabs: null
    }
  },
  components: {
    Shippers,
    Brokers,
    FaqTabs,
    Carrier
}
}
</script>

<style scoped lang="scss">
.bg {
  background: rgba(57, 117, 235, 0.2);
  display: flex;
  padding: 104px 0px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  align-self: stretch;
  margin-bottom: 50px;

  h1 {
    color: #1044aa;
    text-align: center;
    font-weight: 700;
    line-height: 100%;

    span {
      background: var(--primary-blue, #3975eb);
      color: #fff;
      padding: 15px;
    }
  }

  .tab-item {
    text-align: center;
    font-size: 16px;
    line-height: 100%;
    padding-bottom: 10px;
    text-transform: capitalize;
    word-spacing: 0px;
    font-weight: 700;
  }
}

@media (max-width : 768px) {
  .bg {
    h1 {
      line-height: 200%;
    }
  }
}


::v-deep .v-slide-group__content{
  flex-wrap: wrap;
}
</style>