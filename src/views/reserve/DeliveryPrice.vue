<template>
  <section>
    <v-sheet class="pa-6" border rounded color="grey-lighten-3" height="556" width="100%">
      <v-tabs fixed-tabs color="primary" v-model="tab">
        <v-tab value="1" key="1"> Flexible Delivery Date Price </v-tab>
        <v-tab value="2" key="2"> Guarantee Delivery Date Price </v-tab>
      </v-tabs>
      <v-window v-model="tab" class="text-body-1 px-2">
        <v-window-item v-for="item in items" :key="item.id" :value="item.id">
          <div>
            <h3 class="my-3 mt-5">$3210</h3>
            <p class="my-3">for 3- 5 days transit</p>
            <p class="my-2">Estimated Price</p>
            <div class="my-2 d-flex justify-space-between align-center">
              <input type="text" height="48" width="472" placeholder="$" class="mr-5"/>
              <v-btn variant="flat" color="primary" size="large" @click="goToReserveInfo">Reserve</v-btn>
            </div>
            <p class="my-2">You won’t be charged yet</p>
            <div class="my-5">
              <div class="py-5 d-flex justify-space-between align-center">
                <span>Lorem ipsum</span><span>$195.00</span>
              </div>
              <v-divider></v-divider>
              <div class="py-5 d-flex justify-space-between align-center">
                <span>Lorem ipsum</span><span>$596.47</span>
              </div>
              <v-divider></v-divider>
               <div class="py-5 d-flex justify-space-between align-center">
                <span>Lorem ipsum</span><span>$230.75</span>
              </div>
              <v-divider></v-divider>
              <div class="py-5 d-flex justify-space-between align-center">
                <span class="font-weight-black">Total before taxes</span><span class="font-weight-black">$5,296.47</span>
              </div>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </v-sheet>
    <v-card  class="my-8">
      <p class="d-flex justify-center align-center text-body-2 py-4"><span class="mr-5 font-weight-black">This is a rere find . Jhon’s place on Truckpedia is usually fully boocked.</span><v-icon icon="mdi-diamond-stone" color="primary" size="x-large"></v-icon></p>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'DeliveryPrice',
  data() {
    return {
      tab: null,
      items: [
        {
          id: '1',
          text: 'Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: '2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  },
  methods: {
    goToReserveInfo(){
      this.$router.push('reserve-info')
    }
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