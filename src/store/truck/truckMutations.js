export default {
  SET_TRUCK_DETAILS (state, payload) {
    state.truckDetails = {...state.truckDetails,...payload}
  },

  SET_DELIVERY_AND_ESTIMATION(state, payload){
    const {deliveryType,estimatedPrice} = payload
    state.truckDetails = {...state.truckDetails,deliveryType,estimatedPrice}

  },

  UPDATE_DATE(state, payload){
    const {name, value} = payload.target
    state.truckDetails = {...state.truckDetails,[name]:value}
  }
}