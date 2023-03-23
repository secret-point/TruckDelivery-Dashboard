import axios from "../../http/axios/index";

export default {
  setTruckId({ commit }, payload) {
    commit("SET_TRUCK_ID", payload);
  },

  setDeliveryTypeAndEstimation({ commit }, payload) {
    commit("SET_DELIVERY_AND_ESTIMATION", payload);
  },

  async reserved({ commit }, payload) {
    const response = await axios.post("truckpedia/reserved", payload);
    return response;
  },
};
