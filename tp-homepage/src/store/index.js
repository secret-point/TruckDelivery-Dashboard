import Vue from 'vue'
import Vuex from 'vuex'
import moduleAuth from './auth/moduleAuth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  'auth': moduleAuth,
})

