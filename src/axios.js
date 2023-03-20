// axios
import axios from 'axios'
import config from './config'

const baseURL = config.SERVICE_URL;
const token = localStorage.getItem('access_token')
export default axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

