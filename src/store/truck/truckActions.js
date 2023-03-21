export default {
  setTruckId({commit}, payload) {
    commit('SET_TRUCK_ID', payload)
  },

  setDeliveryTypeAndEstimation({commit},payload){
    commit('SET_DELIVERY_AND_ESTIMATION', payload)
  }

}

