.<template>
  <section>
    <div>
    <v-row class="justify-space-between align-center mb-3">
      <v-col cols="8">
        <div><img src="@/assets/spotEdge.png" width="265" height="60" /></div>
        <p class="d-flex justify-center">
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
          <v-icon icon="mdi-star" size="xs" color="info"></v-icon>
        </p>
      </v-col>
      <v-col cols="4">
        <p><v-btn variant="outlined" color="primary" size="x-large">$3210</v-btn></p>
        <p class="my-1">
          <span class="text-body-2 text-grey">Total miles</span
          ><span class="ml-4 text-h6">737</span>
        </p>
      </v-col>
    </v-row>
  </div>
  <v-divider></v-divider>
  <div class="text-body-2 text-grey">
    <div class="d-flex justify-space-between align-center my-5">
      <p><span>Pick Up Date</span><span class="ml-3 text-black">Dec 9, 08:08 pm</span></p>
      <p><span>Max Weight</span><span class="ml-3 text-black">Sample</span></p>
    </div>
    <div class="d-flex justify-space-between align-center my-5">
      <p><span>Delivery</span><span class="ml-3 text-black">Dec 12, 02:26 pm</span></p>
      <p><span>Truck Type</span><span class="ml-3 text-black">Van</span></p>
    </div>
  </div>
  <v-divider></v-divider>
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style>
</style>