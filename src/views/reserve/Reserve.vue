<template>
  <div>
    <main>
      <v-container>
        <v-row>
          <v-col cols="5">
            <article>
             <intro :truckDetails="truckDetails"/>
             <!-- <Details /> -->
             <offers />
            </article>
          </v-col>
          <v-col cols="7">
            <aside>
              <delivery-price :truckDetails="truckDetails"/>
            </aside>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </div>
</template>

<script>
import TruckpediaHeader from '../homepage/components/Header.vue'
import DeliveryPrice from './DeliveryPrice.vue'
import Details from './Details.vue'
import Intro from './Intro.vue'
import Offers from './Offers.vue'
import { mapState } from "vuex";
import { toRaw } from "vue";

export default {
  name:'Reserve',
  components:{
    TruckpediaHeader,
    Intro,
    Details,
    Offers,
    DeliveryPrice,
  },
  computed:{
      ...mapState("truck", ["truckDetails"]),
  }

}
</script>

<style scoped lang="scss">

</style>