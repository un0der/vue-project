import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getcategory } from './apis/textapi'
getcategory().then(res => { console.log(res) }).catch(e => { console.log(e) })
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
