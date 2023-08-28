<template>
  <v-row no-gutters class="pa-4 h-screen">
    <v-col>
      <v-form @submit.prevent="submit">
        <v-container class="w-50">
          <v-card :loading="loading" class="pa-10">
            <h4 class="font-weight-bold pb-4 color-grey">
              Recover your password
            </h4>
            <p class="text-subtitle-2">
              Please enter your email address and we'll send you instructions on
              how to reset your password.
            </p>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              class="mt-6"
              clearable
              label="Email address"
              variant="outlined"
            ></v-text-field>

            <v-row justify="space-between" class="mt-4">
              <v-col cols="auto">
                <v-btn variant="outlined" rounded="lg" @click="backToLogin()"
                  >Back To Login
                </v-btn>
              </v-col>

              <v-col cols="auto">
                <v-btn color="primary" type="submit" rounded="lg"
                  >Recover Password
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      email: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    backToLogin() {
      this.$router.push({ name: "login" });
    },
    submit() {
      this.loading = true;
      const payload = {
        email: this.email,
      };

      this.$store
        .dispatch("auth/forgotPassword", payload)
        .then(() => {
          this.$notify({
            type: "success",
            title: "Forgot Password",
            text: "please check your email, we send you password reset link.",
          });
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          if (!error) return;
          console.log(error);
          this.$notify({
            type: "error",
            title: "Error",
            text:
              (((error || {}).response || {}).data || {}).message ||
              "Something went wrong",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
