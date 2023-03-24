// import  * as Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from "vuex";
import moduleAuth from './auth/moduleAuth.js'


import moduleTruck from './truck/index.js'

// Vue.use(Vuex)

export default createStore({
  modules:{
    'auth': moduleAuth,
    'truck':moduleTruck
  },
  // strict: process.env.NODE_ENV !== 'production'
})

