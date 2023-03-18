import Vue from 'vue'
import Vuex from 'vuex'
import moduleTrial from './trial/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  'auth': moduleTrial,
})

