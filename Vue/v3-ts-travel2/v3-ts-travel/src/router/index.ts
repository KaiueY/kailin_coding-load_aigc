// ts 是js的超集 不写ts, 直接写js 也可以
// vue3 98%代码用ts写的
// ts 是多了类型定义， js 写起来和java一样 静态编译 
// 将 90%以上的代码问题，搞定在编译阶段 
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw} from 'vue-router'
// : 声明一个类型 RouteRecordRaw 一个route 类型 RouteRecordRaw[] route数组
const rootRoutes :RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'Home',
        component: () => import('../views/HomePage/HomePage.vue')
    }
]

const routes :RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: () => import('../views/TheRoot.vue'),
        redirect: '/home',
        children: rootRoutes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router