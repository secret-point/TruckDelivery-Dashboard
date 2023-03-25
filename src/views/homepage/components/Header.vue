<template>
  <div class="truckpedia-header">
    <!-- <div class="d-flex align-center truckpedia-logo">
      <span class="truck-logo">TRUCK</span>
      <span class="pedia-logo">PEDIA</span>
    </div> -->
    <img src="@/assets/images/logo.svg" @click="$router.push('/')" />
    <div>
      <ul class="d-flex align-center" style="list-style-type: none">
        <!-- <li class="color-primary">How it works</li> -->
        <li style="color: #9e9e9e" @click="goToLogin" v-if="!checkAccessToken">Login</li>
        <li v-if="!checkAccessToken">
          <v-btn color="primary" @click="goToRegister">Signup </v-btn>
          <!-- <vs-button color="#1877F2" type="filled">Signup</vs-button> -->
        </li>
        <li v-if="checkAccessToken">
          <v-btn color="primary" @click.stop="goToDashboard"> Dashboard </v-btn>
        </li>
        <li v-if="checkAccessToken">
          <v-btn color="error" class="ml-3" variant="text" @click.stop="logout"> Logout </v-btn>
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
    },
    showDashboard() {
      const allowedRoles = ['ba', 'sa', 'broker', 'shipper'];
      const userRole = localStorage.getItem('user_role');

      return userRole && allowedRoles.includes(userRole)
    },
  },
  methods: {
    goToLogin() {
      this.$router.push('login')
    },
    goToRegister() {
      this.$router.push('register')
    },
    goToDashboard() {
      const accessToken = localStorage.getItem("access_token");
      if (!process.env.NODE_ENV || process.env.NODE_ENV !== "development") {
        window.location.href = `https://dashboard.ezpapel.ai/login?access_token='${accessToken}'`;
      } else {
        window.location.href = `http://127.0.0.1:8000/login?access_token='${accessToken}'`;
      }
    },
    logout(){
      this.$store
        .dispatch('auth/logout')
    },

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
