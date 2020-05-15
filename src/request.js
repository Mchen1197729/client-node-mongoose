import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5400/',
  timeout: 1000,
  withCredentials: true
})
