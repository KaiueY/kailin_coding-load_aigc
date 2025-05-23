import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElDialog from './components/dialog'

const app = createApp(App)
app.use(ElDialog)
    .mount('#app')
