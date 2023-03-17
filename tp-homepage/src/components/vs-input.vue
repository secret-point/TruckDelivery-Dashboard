<template>
  <div class="pb-4 hero-bg">
    <v-container>
      <v-card max-width="55%" class="pa-10 mx-auto">
        <v-row>
          <v-col cols="6">
            <v-text-field clearable label="Business Name" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field clearable label="USDOT Number" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field clearable label="Billing Email" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field clearable label="Load# start from" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <p>Business Address</p>
            <v-text-field clearable label="Load# start from" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6" class="mt-6">
            <v-text-field clearable label="Load# start from" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field clearable label="Load# start from" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field clearable label="Load# start from" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field clearable label="Load# start from" variant="underlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field clearable label="Load# start from" variant="underlined"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import config from '@/config/constants.js'

const dict = {
  custom: {
    business_name: {
      required: 'The business name field is required'
      // alpha: 'Your business name may only contain alphabetic characters'
    },
    usdot_number: {
      required: 'The usdot number field is required'
      // alpha: 'Your USDOT Number may only contain alphabetic characters'
    },
    email: {
      required: 'The billing email field is required.',
      email: 'Please enter valid email address.'
    },
    load_unique_id_started_from: {
      required: 'The load id field is required',
      numeric: 'Please enter only numeric value.'
    },
    address: {
      required: 'The address field is required'
    },
    state: {
      required: 'The state field is required'
    },
    city: {
      required: 'The city field is required'
    },
    zipcode: {
      required: 'The zipcode field is required'
    },
    phone_number: {
      required: 'The phone number field is required'
    },
    fax_number: {
      required: 'The fax number field is required'
    },
    timezone: {
      required: 'The timezone field is required'
    }
  }
}

export default {
  data() {
    return {
      business_name: '',
      usdot_number: '',
      email: '',
      load_unique_id_started_from: '',
      address: '',
      zipcode: '',
      city: '',
      state: '',
      timezone_options: [],
      time_zone: '',
      fax_number: '',
      phone_number: '',

      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions
    }
  },

  async created() {
    window.addEventListener('storage', this.checkLogout)

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
      this.$validator.validateAll().then(async (result) => {
        if (result) {
          try {
            this.$vs.loading()

            const payload = {
              business_name: this.business_name,
              usdot_number: this.usdot_number,
              email: this.email,
              load_unique_id_started_from: this.load_unique_id_started_from,
              address: this.address,
              city: this.city,
              state: this.state,
              zipcode: this.zipcode,
              phone_number: this.phone_number,
              fax_number: this.fax_number,
              timezone: this.time_zone
            }

            // console.log(payload)

            await this.$store.dispatch('auth/adminSetupProfile', payload)

            await this.$router.push({ name: 'home' })

            this.$vs.notify({
              color: 'success',
              title: 'Profile Setup',
              text: 'Profile set up successfully.'
            })
          } catch (error) {
            this.$vs.notify({
              title: 'Error',
              text: error.response.data.message,
              color: 'danger',
              time: 5000
            })
          } finally {
            this.$vs.loading.close()
          }
        }
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
      if (!place) return

      const address = place.formatted_address.split(', ').slice(0, -3).join(', ')

      const city = place.address_components
        .filter((address) => {
          return address.types.includes('locality')
        })
        .map((address) => address.long_name)[0]

      const state = place.address_components
        .filter((address) => {
          return address.types.includes('administrative_area_level_1')
        })
        .map((address) => address.short_name)[0]

      const postalCode = place.address_components
        .filter((address) => {
          return address.types.includes('postal_code')
        })
        .map((address) => address.short_name)[0]

      // const latitude = place.geometry.location.lat()
      // const longitude = place.geometry.location.lng()

      this.address = address
      this.city = city
      this.state = state
      this.zipcode = postalCode
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-bg {
  background-image: url('../../../assets/images/login-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>

