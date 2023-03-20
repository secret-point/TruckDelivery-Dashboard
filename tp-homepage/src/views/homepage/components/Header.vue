<template>
  <div class="truckpedia-header">
    <!-- <div class="d-flex align-center truckpedia-logo">
      <span class="truck-logo">TRUCK</span>
      <span class="pedia-logo">PEDIA</span>
    </div> -->
    <img src="@/assets/images/logo.svg" @click="$router.push('/')" />
    <div>
      <ul class="d-flex align-center" style="list-style-type: none">
        <li class="color-primary">How it works</li>
        <li style="color: #9e9e9e" @click="goToLogin" v-if="!checkAccessToken">Login</li>
        <li v-if="!checkAccessToken">
          <v-btn color="primary" @click="goToRegister">Signup </v-btn>
          <!-- <vs-button color="#1877F2" type="filled">Signup</vs-button> -->
        </li>
        <li v-else>
          <v-btn color="primary">Dashboard </v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TruckpediaHeader',
  computed: {
    checkAccessToken() {
      const token = localStorage.getItem('access_token');
      if (token) {
        return true
      }
      return false
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('login')
    },
    goToRegister() {
      this.$router.push('register')
    }
  }
}
</script>

<style lang="scss" scoped>
.color-primary {
  color: #1877f2;
}
.truckpedia-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 30px;
  border-bottom: 1px solid #eaeaea;
  .truckpedia-logo {
    font-size: 16px;
    .truck-logo {
      color: #1877f2;
      font-weight: bold;
    }
    .pedia-logo {
      color: rgba(24, 119, 242, 0.8);
    }
  }
  ul {
    li {
      padding: 0 20px;
      cursor: pointer;
    }
  }
}
</style>
