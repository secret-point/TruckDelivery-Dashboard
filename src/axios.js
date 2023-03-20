// axios
import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/'
const token = localStorage.getItem('access_token')
export default axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

