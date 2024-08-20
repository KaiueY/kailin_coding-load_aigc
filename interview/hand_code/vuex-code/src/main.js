import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/index.js'

const app = createApp(App)
// 调用install方法 vue和其它生态的借口
app.use(store)
app.mount('#app')
