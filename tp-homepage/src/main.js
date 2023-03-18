import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios.js'

Vue.prototype.$http = axios
import store from './store/index'

const app = createApp(App)
// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})


app.use(router);
app.use(vuetify);
app.use(store)
app.mount('#app')
