import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
import { getcategory } from './apis/textapi'
getcategory().then(res => { console.log(res) }).catch(e => { console.log(e) })
app.config.errorHandler = (err, vm, info) => {
  console.error('全局捕获的错误:', err)
  console.log('发生在组件:', vm)
  console.log('错误位置:', info)
}