import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useUserStore } from "@/stores/userStore";
import router from '@/router'
const instance = axios.create(
  {
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
  }
)
instance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e)

)
instance.interceptors.response.use(res => {
  return res.data
}, async (e) => {
  console.log(e)
  ElMessage({ type: 'warning', message: e.response.data.message })
  if (e.response.status === 401) {
    const userStore = useUserStore()
    userStore.clearUserInfo()

    router.push('/login');
  }
  return Promise.reject(e)
}

)
export default instance