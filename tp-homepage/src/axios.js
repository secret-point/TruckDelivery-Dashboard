// axios
import axios from 'axios'

const baseURL = '/api'

export default axios.create({
  baseURL
  // You can add your headers here
})