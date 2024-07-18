import { createApp } from 'vue'
import  {createPinia} from 'pinia'
// 引入Vue组件库 70%组件有第三方提供
import {
    ElButton,
    ElForm,
    ElInput,
    ElLink,
    ElIcon,
    ElCheckbox,
}from 'element-plus'
// 引入Vue组件库样式
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app =createApp(App)
for (const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}
app
.use(router)
.use(ElButton)
.use(ElInput)
.use(ElForm)
.use(ElLink)
.use(ElCheckbox)
.use(createPinia())
.use(ElIcon)

.mount('#app')
