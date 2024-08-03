import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'


const rootRoutes :RouteRecordRaw[] =[
    {
        path:'home',
        name:'Home',
        meta:{

        },
        component:()=>import('../views/Home/Home.vue')

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
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router