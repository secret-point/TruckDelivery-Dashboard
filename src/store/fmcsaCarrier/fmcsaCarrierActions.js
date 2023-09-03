import axios from '../../http/nodeAxios/index';

export default {
  setCarrierDetails({ commit }, payload) {
    commit('SET_CARRIER_DETAILS', payload);
  },
  async getAllCarriers({ commit }, payload) {
    const response = await axios.post('fmcsaCarrier/getCarriers', payload);
    commit('SET_FILTERED_CARRIERS', response.data.payload);
    return response.data.payload;
  },
  async getCarrierDetail({ commit }, query) {
    const response = await axios.get('fmcsaCarrier/getCarrierDetails', {
      params: query,
    });
    commit('SET_SELECTED_CARRIER', response.data.payload);
    return response.data.payload;
  },
};
