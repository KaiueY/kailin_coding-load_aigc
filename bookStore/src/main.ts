
import { createApp } from 'vue'
import './assets/main.css'
import 'vant/lib/index.css'
import './assets/style/style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Toast } from 'vant'


const app  =createApp(App)
app.use(router)
app.use(Toast)
app.use(createPinia())
app.mount('#app')
