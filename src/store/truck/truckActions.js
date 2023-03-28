import axios from "../../http/axios/index";

export default {
  setTruckDetails({ commit }, payload) {
    commit("SET_TRUCK_DETAILS", payload);
  },

  setDeliveryTypeAndEstimation({ commit }, payload) {
    commit("SET_DELIVERY_AND_ESTIMATION", payload);
  },

  updateDate({commit},payload){
    commit("UPDATE_DATE", payload);
  },
  async reserve({ commit }, payload) {
    const response = await axios.post("truckpedia/reserve", payload);
    return response;
  },
};
