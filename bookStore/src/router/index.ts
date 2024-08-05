import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'


const rootRoutes :RouteRecordRaw[] =[
    {
        path:'home',
        name:'Home',
        meta:{
            cache :true
        },
        component:()=>import('../views/Home.vue')

    },
    {
        path:'collect',
        name:'Collect',
        meta:{
            cache :false
        },
        component:()=>import ('../views/Collect.vue')
    },
    {
        path:'chat',
        name:'Chat',
        meta:{
            cache :false
        },
        component:()=>import ('../views/AiChat.vue')
    },
    {
        path:'account',
        name:'account',
        meta:{
            cache :false
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
        name:'Login',
        component:()=>import('@/views/Login.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router