import axios from 'axios';

export default axios.create({
  baseURL: 'https://6957-103-134-115-60.ngrok.io/api/',
  timeout: 2000,
});
