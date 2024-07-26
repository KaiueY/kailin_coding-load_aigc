import 'lib-flexible/flexible'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/reset.css'
import { Button ,Form,Field,CellGroup} from 'vant'
import 'vant/lib/index.css';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Form)
app.use(Field)
app.use(CellGroup)

app.mount('#app')
