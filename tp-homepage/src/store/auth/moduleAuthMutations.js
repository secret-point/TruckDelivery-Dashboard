export default {
  SET_USER_DATA (state, user) {
    state.user = user
    localStorage.setItem('access_token', user.access_token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
  },
}