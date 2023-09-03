import axios from '../../nodeAxios.js';
import store from '../../store/index';
import router from '../../router/index';

// Request interceptor
axios.interceptors.request.use((request) => {
  // const token = store.getters['auth/token'];
  const token = localStorage.getItem('access_token');

  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }

  return request;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = (error || {}).response || {};
    if (status == 401) {
      // TODO: we should call PHP server's log out API, but does this code trying
      // to call Node server?
      store.dispatch('auth/logoutLocally');
      router.push({ name: 'login' });
    }

    return Promise.reject(error);
  }
);

export default axios;
