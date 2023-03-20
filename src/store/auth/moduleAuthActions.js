import axios from '../../http.js'

export default {
  async loginJWT ({commit}, payload) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      const loginData = {
        'email': payload.email,
        'password': payload.password,
        'remember_me': payload.remember_me
      }

      const response = await axios.post('auth/login', loginData)
      commit('SET_USER_DATA', response.data.payload)

    } catch (e) {
      console.log(e.response)
      throw new Error(e.response.data.message)
    }
  },

}