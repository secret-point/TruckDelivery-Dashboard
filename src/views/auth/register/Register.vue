<template>
  <div class="logo" @click="$router.push('/')">
    <img src="@/assets/images/logo.svg" />
  </div>
  <notifications position="bottom right" />
  <v-row no-gutters class="pa-4 h-screen">
    <v-col cols="6" class="d-flex flex-column justify-center h-screen">
      <v-form @submit.prevent="submit">
        <v-container class="w-50">
          <h2 class="font-weight-bold pb-4 text-center color-grey">
            Create Account
          </h2>
          <v-select
            v-model="role"
            clearable
            label="Select Role"
            :rules="[rules.required]"
            item-title="label"
            item-value="value"
            :items="roles"
          ></v-select>
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            clearable
            label="Email address"
          ></v-text-field>
          <v-text-field
            v-model="firstName"
            :rules="[rules.required]"
            clearable
            label="First name"
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            :rules="[rules.required]"
            clearable
            label="Last name"
          ></v-text-field>
          <v-text-field
            clearable
            v-model="password"
            type="password"
            label="Password"
            :rules="[rules.required, rules.min]"
            hint="Enter your password to access this website"
            counter
          ></v-text-field>
          <v-btn color="primary" class="w-100" rounded="lg" type="submit"
            >Continue
          </v-btn>
          <p class="mt-5">
            Don't have an account?
            <span style="color: #5299f5" @click="goToLogin">Login</span>
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
  name: "register",
  data() {
    return {
      show1: false,
      show2: true,
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      roles: config.allowedRegisterRoles,
      role: "",
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
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        // confirmPassword: this.confirm_password
      };
      // TODO: why the UI would still go here if I didn't provide company type??? What's the purpose of the required at all??? It's not working.
      if (!this.role) {
        this.$notify({
          type: "error",
          title: "Error",
          text: "Please select user role.",
        });
        return;
      }
      this.$store
        .dispatch("auth/registerUserJWT", payload)
        .then(({ data: { payload } }) => {
          this.$notify({
            group: "auth",
            type: "success",
            title: "Success",
            text: "Congratulations! You have registered successfully.",
          });
          // window.localStorage.setItem('access_token', data.payload.access_token)
          window.localStorage.removeItem("user_role");
          if (payload?.admin_company_details?.companyType)
            window.localStorage.setItem(
              "user_role",
              payload?.admin_company_details?.companyType
            );

          this.$router.push({
            name: "setup-profile",
            query: { role: this.role },
          });
          // window.reload();
        })
        .catch((error) => {
          console.error(error);
          if (!error) return;
          this.$notify({
            type: "error",
            title: "Error",
            text: (((error || {}).response || {}).data || {}).message || "Something went wrong",
          });
        });
    },
    goToLogin() {
      this.$router.push("login");
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
