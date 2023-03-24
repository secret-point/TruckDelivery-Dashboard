export default {
  SET_TRUCK_ID (state, id) {
    state.truckDetails.id = id
  },

  SET_DELIVERY_AND_ESTIMATION(state, payload){
    const {deliveryType,estimatedPrice} = payload
    state.truckDetails.deliveryType = deliveryType
    state.truckDetails.estimatedPrice = estimatedPrice
  }
}