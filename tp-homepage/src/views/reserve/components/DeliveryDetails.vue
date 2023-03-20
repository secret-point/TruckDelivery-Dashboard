<template>
  <div>
    <v-row>
      <v-col cols="6">
        <div class="mt-30px">
          <div class="flex flex-col w-full">
            <h3 class="">Great! Now tell us a little bit more about the delivery location</h3>
            <div class="mt-20px w-full">
              <label class="text-sm">Company or Individual name</label>
              <input class="custom-input" placeholder="$ 100000" />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Address</label>
               <vue-google-autocomplete
                id="map-pickup"
                class="custom-input"
                :country="['us', 'ca']"
                v-on:placechanged="setAddress($event)"
              >
              </vue-google-autocomplete>
              <!-- <input class="custom-input" placeholder="12345 address line one" /> -->
              <!-- <label class="text-xs text-gray-400">
                This address is not recognized, please double check that it is entered correctly. If
                the address is correct, you may proceed with your shipment.
              </label> -->
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">City</label>
              <input v-model="city" class="custom-input" placeholder="Newyork" />
              <!-- <label class="text-xs text-gray-400">Apartment, Unit, Suite, etc.</label> -->
            </div>
             <div class="mt-10px w-full">
              <label class="text-sm">State</label>
              <input v-model="state" class="custom-input" placeholder="NY" />
              <!-- <label class="text-xs text-gray-400">Seattle etc.</label> -->
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Zip code</label>
              <input v-model="zipcode" class="custom-input" placeholder="91732" />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Pick-up reference number (optional)</label>
              <input class="custom-input" placeholder="1223243432423432" />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Special instructions (optional)</label>
              <textarea class="custom-input" placeholder="Notes" rows="6" />
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="mt-30px">
          <div class="flex flex-col w-full">
            <h3 class="">Who can we contact at this location?</h3>
            <div class="mt-20px w-full">
              <label class="text-sm">First name</label>
              <input class="custom-input" placeholder="Hongshuai" />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Last name</label>
              <input class="custom-input" placeholder="Lu" />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Phone</label>
              <input class="custom-input" placeholder="(626)831 8933" />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Email</label>
              <input class="custom-input" type="email" placeholder="justin@gmail.com" />
            </div>
            <div class="mt-10px flex gap-5px w-full">
              <input type="checkbox" />
              <label class="text-sm">Appointment required</label>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GoogleMapMixin from '../../../../src/mixings/googleMapMixin'
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  name: 'DeliveryDetails',
  data(){
    return {
        address: '',
        city: '',
        state: '',
        zipcode: ''
    }
  },
  components: {
    VueGoogleAutocomplete
  },
  mixins: [GoogleMapMixin],
  methods:{
    setAddress(place) {
        const {route,street_number,postal_code,administrative_area_level_1,locality} = place
        if (!place) return;
        this.address = `${street_number} ${route}`
        this.city = locality
        this.state = administrative_area_level_1
        this.zipcode = postal_code
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/utility.scss';

// Utility classes

textarea {
  resize: none;
}
</style>
