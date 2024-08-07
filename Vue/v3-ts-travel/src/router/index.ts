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
        name:'Home',
        meta :{
            cache:true
        },
        component:()=> import('../views/Home/Home.vue')
    },
    {
        path:'discount',
        name:'Discount',
        meta:{
            cache :false

        },
        component:()=> import('../views/Discount/dicount.vue')
    }
]

const routes :RouteRecordRaw[] = [
    {
        path:'/',
        name:'App',
        meta:{
            title : '主页',
        },
        component:()=> import ('@/views/TheRoot.vue'),
        redirect:'/home',
        children:rootRoutes   
    },
    {
        path:'/login',
        name:'Login',
        meta:{
            title:'登录',
        },
        component:()=>import('@/views/Login.vue')
    }
]
const router  = createRouter({
    history:createWebHistory(),
    routes
})

export default router