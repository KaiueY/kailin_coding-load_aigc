// ts是js的超集 不写ts 直接写js也可行
// ts 就是多了类型定义 js写起来和Java一样  静态编译 
// 可以将90%以上的代码问题 扼杀在编译阶段
import {createRouter ,createWebHistory} from 'vue-router'
// RouteRecordRaw 类型约束  可以自定义类型约束
import type { RouteRecordRaw } from 'vue-router'


// : 声明一个类型 如 [] {} 
const rootRoutes :RouteRecordRaw[] = [
    {
        path:'home',
        component:()=> import('../views/HomePage/HomePage.vue')
    }
]
const routes :RouteRecordRaw[] = [
    {
        path:'/',
        name:'App',
        meta:{
            title : '主页',
        },
        component:()=> import ('../views/TheRoot.vue'),
        redirect:'/home',
        children:rootRoutes   
    }
]
const router  = createRouter({
    history:createWebHistory(),
    routes
})

export default router