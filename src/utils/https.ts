import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';

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
}, async (e) => {
  console.log(e)
  ElMessage({ type: 'warning', message: e.response.data.message })
  const router = await import('vue-router').then(m => m.useRouter());
  router.push('/login');
  Promise.reject(e)
}

)
export default instance