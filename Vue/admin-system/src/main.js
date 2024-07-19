import { createApp } from 'vue'
import  {createPinia} from 'pinia'
// 引入Vue组件库 70%组件有第三方提供
import {
    ElButton,
    ElForm,
    ElInput,
    ElLink,
    ElIcon,
    ElAvatar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElCheckbox,
}from 'element-plus'
// 引入Vue组件库样式
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/styles/variable.css'

const app =createApp(App)
for (const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}
app
.use(router)
.use(ElMenu)
.use(ElMenuItem)
.use(ElButton)
.use(ElInput)
.use(ElForm)
.use(ElLink)
.use(ElCheckbox)
.use(createPinia())
.use(ElIcon)
.use(ElDropdown)
.use(ElDropdownMenu)
.use(ElSubMenu)
.use(ElDropdownItem)
.use(ElAvatar)
// 自定义指令
import {usePermissStore} from './store/permiss'

    const permissStore = usePermissStore()

    app.directive('permiss',{
        mounted(el,binding){
            if(binding.value &&
                !permissStore.key.includes(String(binding.value))
            ){
                el['hidden'] = true
            }
        }
    })


app.mount('#app')
