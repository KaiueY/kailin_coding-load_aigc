// Vue3 的类型系统
import type { App } from "vue"
import Dialog from './Dialog.vue' //传入的组件  组件也是一个对象

export default {
    
    install(app:App){
        // 全局组件
        // ts功底 ts比 js效率高 因为ts有类型推断
        // 类很多  来自各方的合作
        
        app.component(Dialog.name as string,Dialog)
    }
}