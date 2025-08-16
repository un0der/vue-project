import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import { lazyPlugin } from './directives'
import { componentPlugin } from './components'
const app = createApp(App)
app.use(lazyPlugin)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(componentPlugin)
app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
  console.error('全局捕获的错误:', err)
  console.log('发生在组件:', vm)
  console.log('错误位置:', info)
}
