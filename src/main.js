import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { lazyPlugin } from './directives'

const app = createApp(App)
app.use(lazyPlugin)
app.use(createPinia())
app.use(router)
app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
  console.error('全局捕获的错误:', err)
  console.log('发生在组件:', vm)
  console.log('错误位置:', info)
}
