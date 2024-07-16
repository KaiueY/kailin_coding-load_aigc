import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

createApp(App)
// use 方法做了什么事呢？
// vue 只负责组件  mvvm 响应式等核心
// 其它的交给生态系统 一起开源
// vue-router 是vue生态🀄中的路由模块
// 别喝他的生态的对戒就是这个use 方法

        .use(router)
        .mount('#app')
