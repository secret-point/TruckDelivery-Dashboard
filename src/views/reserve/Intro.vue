.<template>
  <section>
    <div>
    <v-row class="justify-space-between align-center mb-3">
      <v-col cols="7">
       <div class="d-flex align-start">
        <div class="col-3">
          <img
            v-if="truckDetails.logoUrl"
            :src="truckDetails.logoUrl"
            width="35"
            height="35"
            alt="logo"
          />
          <v-avatar
            v-else
            class="logo color-white"
            rounded="0"
            color="#1877f1"
          >
            {{ getFirstLetter(truckDetails.name) }}
          </v-avatar>
        </div>
        <div class="col-9 pl-4">
            <p>{{truckDetails.name}}</p>
            <p class="d-flex justify-center mt-5">
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
        </p>
        </div>
       </div>
      </v-col>
      <v-col cols="5">
        <p class="text-end"><v-btn variant="outlined" color="primary" size="x-large">{{(truckDetails.rate).toFixed(2)}}</v-btn></p>
        <p class="my-1 text-end">
          <span class="text-body-2 text-grey">Total miles</span
          ><span class="ml-4 text-h6">{{truckDetails.distance}}</span>
        </p>
      </v-col>
    </v-row>
  </div>
  <v-divider></v-divider>
  <div class="text-body-2 text-grey">
    <div class="d-flex justify-space-between align-center my-5">
      <p><span>Pick Up Date</span><span class="ml-3 text-black">{{truckDetails.date}}</span></p>
      <p><span>Max Weight</span><span class="ml-3 text-black">{{truckDetails.maxWeight}}</span></p>
    </div>
    <div class="d-flex justify-space-between align-center my-5">
      <p></p>
      <p><span>Truck Type</span><span class="ml-3 text-black">Van</span></p>
    </div>
  </div>
  <v-divider></v-divider>
  </section>
</template>

<script>
import { getFirstLetter } from "@/helpers/helper";

export default {
  name: 'Intro',
  props:{
    truckDetails:{
      type:Object,
      default:()=>{}
    }
  },
  methods:{
    getFirstLetter(value) {
      return getFirstLetter(value);
    }
  }
}
</script>

<style lang="scss" scoped>
// Utility classes
.logo {
  width: 35px;
  height: 35px;
}

.color-white {
  color: #fff;
}
</style>