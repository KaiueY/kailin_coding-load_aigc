import '@/assets/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { Area,ActionSheet } from 'vant';
const app = createApp(App)

app.use(router)
app.use(Area)
app.use(ActionSheet)

app.mount('#app')
