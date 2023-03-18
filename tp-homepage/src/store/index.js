import Vue from 'vue'
import Vuex from 'vuex'
import moduleAuth from './auth/moduleAuth.js'

// import moduleAuth from './trial/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    'auth': moduleAuth,
  },
  strict: process.env.NODE_ENV !== 'production'
})

