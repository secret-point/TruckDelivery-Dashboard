<template>
  <div class="pb-4 hero-bg">
    <v-form @submit.prevent="submit">
      <v-container>
        <v-card max-width="55%" class="pa-10 mx-auto">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="bussinesName"
                clearable
                density="comfortable"
                :persistent-placeholder="true"
                label="Business Name"
                :rules="[rules.required]"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="usdotNumber"
                clearable
                density="compact"
                :rules="[rules.required]"
                :persistent-placeholder="true"
                label="USDOT Number"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="email"
                clearable
                density="compact"
                :persistent-placeholder="true"
                label="Billing Email"
                variant="underlined"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="loadUniqueIdStartedFrom"
                type="number"
                clearable
                density="compact"
                :persistent-placeholder="true"
                label="Load# start from"
                variant="underlined"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <p class="heading">Business Address</p>
            </v-col>
            <v-col cols="6">
              <div class="autocomplete">
                <label class="label">Address</label>
                <vue-google-autocomplete
                  v-model="address"
                  id="map"
                  class="custom-input"
                  :country="['us', 'ca']"
                  @placechanged="setPlace"
                  placeholder=""
                >
                </vue-google-autocomplete>
              </div>
              <!-- <v-text-field
                clearable
                density="compact"
                :persistent-placeholder="true"
                label="Address"
                variant="underlined"
                :rules="[rules.required]"
              ></v-text-field> -->
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="city"
                clearable
                density="compact"
                :persistent-placeholder="true"
                label="City"
                variant="underlined"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="state"
                clearable
                density="compact"
                :persistent-placeholder="true"
                label="State"
                variant="underlined"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="zipcode"
                clearable
                density="compact"
                :persistent-placeholder="true"
                label="Zipcode"
                variant="underlined"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="phoneNumber"
                clearable
                density="compact"
                :persistent-placeholder="true"
                :rules="[rules.required]"
                label="Phone Number"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="faxNumber"
                clearable
                density="compact"
                :persistent-placeholder="true"
                label="Fax"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <p class="heading">Time Zone</p>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="timeZone"
                :persistent-placeholder="true"
                label="Time Zone"
                item-title="label"
                item-value="value"
                :items="timezone_options"
                variant="underlined"
                :rules="[rules.required]"
              ></v-select>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-row class="justify-space-between w-100">
              <v-btn variant="outlined" color="error"> Logout </v-btn>
              <v-btn type="submit" color="primary" variant="flat">Submit</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  components: {
    VueGoogleAutocomplete
  },
  data() {
    return {
      bussinesName: '',
      usdotNumber: '',
      email: '',
      loadUniqueIdStartedFrom: '',
      address: '',
      zipcode: '',
      city: '',
      state: '',
      timezone_options: [],
      timeZone: '',
      faxNumber: '',
      phoneNumber: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 6 || 'Min 6 characters',
        emailMatch: () => `The email and password you entered don't match`,
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },

  async created() {
    // window.addEventListener('storage', this.checkLogout)

    try {
      // const {data} = await this.$store.dispatch('auth/getTimezoneList')
      //
      // console.log(data.payload)
      const timezone = {
        'America/Los_Angeles': 'Pacific Time - US and Canada',
        'America/Edmonton': 'Mountain Time - US and Canada',
        'America/Winnipeg': 'Central Time - US and Canada',
        'America/New_York': 'Eastern Time - US and Canada',
        'America/Halifax': 'Atlantic Time'
      }

      this.timezone_options = Object.entries(timezone).map((timezone) => ({
        label: timezone[1],
        value: timezone[0]
      }))
    } catch (error) {
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: error.response.data.message
      })
    }
  },

  methods: {
    checkLogout() {
      try {
        if (!localStorage.getItem('access_token')) {
          window.location.reload()
        }
      } catch (e) {
        console.log(`Error while logging out: ${e}`)
      }
    },

    async submit() {
      const payload = {
        business_name: this.businessName,
        usdot_number: this.usdotNumber,
        email: this.email,
        load_unique_id_started_from: this.loadUniqueIdStartedFrom,
        address: this.address,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
        phone_number: this.phoneNumber,
        fax_number: this.faxNumber,
        timezone: this.timeZone
      }

      this.$http.post('admin/setup-profile', payload).then(() => {
        this.$router.push({ name: 'home' })
      })
    },
    async logout() {
      this.$vs.loading()

      try {
        await this.$store.dispatch('auth/logout')

        await this.$router.push({ name: 'page-login' }).catch(() => {})

        this.$vs.notify({
          title: 'Logout.',
          color: 'success',
          text: 'You logout successfully.'
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close()
      }
    },

    /*
     * Google Map Autocomplete
     */
    setPlace(place) {
      console.log(place)
      if (!place) return
      const address = place.street_number ? place.street_number + '' + place.route : place.route
      this.address = address
      this.city = place.locality
      this.state = place.administrative_area_level_1
      this.zipcode = place.postal_code
    }
  }
}
</script>

<style lang="scss" scoped>
.autocomplete {
  position: relative;
  .label {
    font-size: 12px;
    color: inherit;
    opacity: 0.68;
    position: absolute;
    top: -10px;
  }
  .custom-input {
    color: inherit;
    position: relative;
    padding: 0.4rem;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
    transition: all 0.3s ease;
    width: 100%;
    outline: 0;
    margin-top: 2px;
  }
}

.hero-bg {
  background-image: url('../../../assets/images/login-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.heading {
  color: rgb(44, 44, 44);
  font-weight: 500;
  font-size: 18px;
}
</style>
