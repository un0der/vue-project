import axios from "axios";
const instance = axios.create(
  {
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
  }
)
instance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e)

)
instance.interceptors.response.use(res => {
  return res.data
}, e => Promise.reject(e)

)
export default instance