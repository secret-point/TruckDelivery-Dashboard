export default {
  SET_CARRIER_DETAILS(state, payload) {
    state.carrierDetails = { ...state.truckDetails, ...payload };
  },

  SET_SELECTED_CARRIER(state, carrier) {
    state.selectedFmcsaCarrier = carrier;
  },

  SET_FILTERED_CARRIERS(state, carriers) {
    state.allCarriers = carriers;
  },
};
