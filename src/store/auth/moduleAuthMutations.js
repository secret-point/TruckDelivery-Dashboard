import axios from '../../axios'
export default {
  SET_USER_DATA (state, user) {
    state.user = user
    localStorage.setItem('access_token', user.access_token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
  },
  SET_USER (state, user) {
    state.user = user
  },
  CLEAR_USER_DATA (state) {
    state.user = null
    localStorage.removeItem('access_token')
    axios.defaults.headers.common['Authorization'] = null

    // location.reload()
    location.href = '/login'
  },

  
}