import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from './store/index'


const app = createApp(App);
// Vuetify
// import 'vuetify/styles'
import "@mdi/font/css/materialdesignicons.css";
// import { createVuestify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
import Notifications from "@kyvg/vue3-notification";

// axios
import axios from "./axios";

app.config.globalProperties.$http = axios;

// const vuetify = createVuetify({
//   components,
//   directives
// })
app.use(router);
// app.use(VeeValidate)
app.use(Notifications);
app.use(vuetify);

import VueGoogleMaps from "@fawmi/vue-google-maps";
import config from "./config";
app.use(VueGoogleMaps, {
    load: {
      key: config.MIX_GOOGLE_MAP_API_KEY,
      libraries: "places",
      // language: 'de',
    },
  });
app.use(store)
app.mount("#app");
