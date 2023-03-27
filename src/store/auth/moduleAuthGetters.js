export default {
  user: (state) => state.user,

  isLoggedIn: (state) => {
    if (localStorage.getItem("access_token")) return 1;
    if (state.user === null || state.user === "") {
      return 0;
    }
    return 1;
  },
};
