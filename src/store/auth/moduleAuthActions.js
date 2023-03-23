import axios from "../../axios";

export default {
  async loginJWT({ commit }, payload) {
    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   };

      // const loginData = {
      //   'email': payload.email,
      //   'password': payload.password,
      //   'remember_me': payload.remember_me
      // }

      const response = await axios.post("auth/login", payload);
      commit("SET_USER_DATA", response.data.payload);
      return response;
    // } catch (e) {
    //   return e.response.data.message;
    //   // throw new Error(e.response.data.message)
    // }
  },

  async registerUserJWT({ commit }, payload) {
    // try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const response = await axios.post(
        "auth/register",
        payload,
        config
      );

      commit("SET_USER_DATA", response.data.payload);
      return response;
    // } catch (e) {
    //   return e.response.data.message;
    //   // throw new Error(e.response.data.message)
    // }
  },
};
