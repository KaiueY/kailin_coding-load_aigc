
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'

// :声明一个类型 RouteRecordRaw
const rootRoutes :RouteRecordRaw[] =[
    {
        path:'home',
        name:'Home',
        meta:{
            cache :true,
            KeepAlive: true,
            title: '首页'
        },
        component:()=>import('../views/Home.vue')

    },
    {
        path:'collect',
        name:'Collect',
        meta:{
            cache :false,
            KeepAlive:false,
            title:'书架'
        },
        component:()=>import ('../views/Collect.vue')
    },
    {
        path:'chat',
        name:'Chat',
        meta:{
            cache :true,
            KeepAlive:true,
            title:'AI'
        },
        component:()=>import ('../views/AiChat.vue')
    },
    {
        path:'account',
        name:'account',
        meta:{
            cache :true,
            KeepAlive:true,
            title:'个人主页'
        },
        component:()=> import('../views/Account.vue')
    }

]

const routes :RouteRecordRaw[]= [
    {
        path: '/',
        name:'App',
        meta:{
            title:'主页'
        },
        component: () => import('../views/TheRoot.vue'),
        children:rootRoutes,
        redirect:'/home'
    },
    {
        path:'/login',
        meta:{
            title:'登录',
        },
        name:'Login',
        component:()=>import('@/views/Login.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    next()
})
export default router