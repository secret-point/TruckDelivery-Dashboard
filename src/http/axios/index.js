import axios from '../../axios.js'
import store from '../../store/index'
import router from '../../router/index'


// Request interceptor
axios.interceptors.request.use(request => {
  // const token = store.getters['auth/token'];
  const token = localStorage.getItem('access_token')

  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`
  }

  // const locale = store.getters['lang/locale']
  // if (locale) {
  //     request.headers.common['Accept-Language'] = locale
  // }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401) {
      // console.log('AXIOS INTERCEPTOR : LOGOUT LOCAL')
      store.dispatch('auth/logoutLocally')
      router.push({name: 'login'})
    }

    return Promise.reject(error)
  }
)


export default axios
