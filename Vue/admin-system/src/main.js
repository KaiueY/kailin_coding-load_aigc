import { createApp } from 'vue'
// 引入Vue组件库 70%组件有第三方提供
import {
    ElButton,
    ElForm,
    ElInput,
    ElLink,
    ElCheckbox,
}from 'element-plus'
// 引入Vue组件库样式
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.use(ElButton)
.use(ElInput)
.use(ElForm)
.use(ElLink)
.use(ElCheckbox)

.mount('#app')
