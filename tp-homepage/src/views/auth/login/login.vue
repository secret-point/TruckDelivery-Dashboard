<template>
    <div class="logo">
        <img src="@/assets/images/logo.svg" />
    </div>
  <v-row no-gutters class="pa-4 h-screen">
    <v-col cols="6" class="d-flex flex-column justify-center h-75">
      <v-container class="w-50">
        <h2 class="font-weight-bold pb-4 text-center color-grey">Login</h2>
        <v-select
          clearable
          label="Select Role"
          :items="['Carrier', 'Broker', 'Shipper']"
          variant="outlined"
        ></v-select>
        <v-text-field
          :rules="[rules.required, rules.email]"
          clearable
          label="Email address"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          clearable
          type="password"
          label="Password"
          variant="outlined"
          :rules="[rules.required, rules.min]"
          hint="Enter your password to access this website"
          counter
        ></v-text-field>
        <v-btn color="#1877F1" class="w-100" rounded="lg">
          <span class="text-white">Login</span>
        </v-btn>
        <p class="mt-5">
          Don't have an account? <span style="color: #5299f5" @click="goToRegister">Register</span>
        </p>
      </v-container>
    </v-col>
    <v-col cols="5">
      <div class="h-100 w-100 mt-8">
        <img
          src="../../../assets/images/auth/side right.png"
          style="height: 85%; width: fit-content; object-fit: contain"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      show1: false,
      show2: true,
      password: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => `The email and password you entered don't match`
      },
      image: '../../../assets/images/auth/side right.png'
    }
  },
  computed: {
    getImage() {
      return this.image
    }
  },
  methods: {
    goToRegister() {
      this.$router.push('register')
    }
  }
}
</script>

<style lang="scss" scoped>
.color-grey{
    color: #515151;
}
.logo{
  padding: 80px;
  position: absolute;
}
</style>