<template>
  <div>
    <truckpedia-header></truckpedia-header>
    <main>
      <v-container>
        <v-row>
          <v-col cols="5">
            <article>
             <intro/>
             <Details/>
             <offers/>
            </article>
          </v-col>
          <v-col cols="7">
            <aside>
              <delivery-price/>
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

export default {
  name:'Reserve',
  components:{
    TruckpediaHeader,
    Intro,
    Details,
    Offers,
    DeliveryPrice,
  }

}
</script>

<style scoped lang="scss">

</style>