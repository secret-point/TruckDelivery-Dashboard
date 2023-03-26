<template>
  <div class="logo">
    <img src="@/assets/images/logo.svg" @click="$router.push('/')" />
  </div>
  <notifications position="bottom right" />
  <v-row no-gutters class="pa-4 h-screen">
    <v-col cols="6" class="d-flex flex-column justify-center h-75">
      <v-form @submit.prevent="submit">
        <v-container class="w-50">
          <h2 class="font-weight-bold pb-4 text-center color-grey">Login</h2>
          <!-- <v-select
            v-model="role"
            clearable
            label="Select Role"
            :items="roles"
            item-title="label"
            item-value="value"
            variant="outlined"
            :rules="[rules.required]"
          ></v-select> -->
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            clearable
            label="Email address"
            variant="outlined"
          ></v-text-field>
          <v-text-field
            v-model="password"
            clearable
            type="password"
            label="Password"
            variant="outlined"
            :rules="[rules.required, rules.min]"
            hint="Enter your password to access this website"
            counter
          ></v-text-field>
          <v-btn color="primary" type="submit" class="w-100" rounded="lg"
            >Login
          </v-btn>
          <p class="mt-5">
            Don't have an account?
            <span style="color: #5299f5" @click="goToRegister">Register</span>
          </p>
        </v-container>
      </v-form>
    </v-col>
    <v-col cols="5">
      <div class="h-100 w-100 mt-8">
        <img
          src="../../../assets/images/auth/side_right.png"
          style="height: 85%; width: fit-content; object-fit: contain"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import config from "../../../config/constants";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      role: "",
      roles: config.roles,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 6 || "Min 6 characters",
        emailMatch: () => `The email and password you entered don't match`,
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
        remember_me: false,
      };
      /*if (this.role != "carrier") {
        payload.role = this.role;
      }*/

      this.$store.dispatch("auth/loginJWT", payload)
        .then(({ data: { payload } }) => {
          this.$notify({
            type: "success",
            title: "Success",
            text: "Congratulations! You have Login successfully.",
          });

          window.localStorage.removeItem("user_role");
          if (payload?.admin_company_details?.companyType)
            window.localStorage.setItem(
              "user_role",
              payload?.admin_company_details?.companyType
            );

          // localStorage.setItem("access_token", data.payload.access_token);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          if (!error) return;
          this.$notify({
            type: "error",
            title: "Error",
            text: error.response.data.message,
          });
        });
    },
    goToRegister() {
      this.$router.push("register");
    },
  },
};
</script>

<style lang="scss" scoped>
.color-grey {
  color: #515151;
}
.logo {
  padding: 80px;
  position: absolute;
}
</style>
