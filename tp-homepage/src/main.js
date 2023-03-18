import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios.js'

Vue.prototype.$http = axios
import store from './store/index'

const app = createApp(App)
// Vuetify
// import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
import Notifications from '@kyvg/vue3-notification'

// axios
import axios from './axios.js'

app.config.globalProperties.$http = axios

// const vuetify = createVuetify({
//   components,
//   directives
// })
app.use(Notifications);
app.use(router);
app.use(vuetify);
app.use(store)
app.mount('#app')
