import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
// .use(ruter)是为了让App.vue中的router-link和router-view生效
