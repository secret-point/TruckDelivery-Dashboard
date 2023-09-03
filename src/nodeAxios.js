// axios
import axios from 'axios';
import config from './config';

const baseURL = config.NODE_SERVER_URL;

export default axios.create({
  baseURL: baseURL,
});
