import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { usePermissStore } from "../store/permiss";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    noAuth: true
                },
                component: () => import('../views/Dashboard.vue')
            },
            {
                path: '/system-user',
                name: 'system-user',
                meta: {
                    title: '用户管理',
                    permiss: '11'
                },
                component: () => import('../views/system-user.vue')

            },
            {
                path: '/system-role',
                name: 'system-role',
                meta: {
                    title: '角色管理',
                    permiss: '12'
                },
                component: () => import('../views/system-role.vue')

            },
        ]
    },
    {
        path: '/login',
        meta: {
            title: '登录',
            noAuth: true
        },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/403',
        meta: {
            title: '403 Forbidden',
            noAuth: true
        },
        component: () => import('../views/403.vue')
    },
    {
        path: '/404',
        meta: {
            title: '404 Not Found',
            noAuth: true
        },
        component: () => import('../views/404.vue')
    },
    {
        // path:'/:path(.*)',
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]
// 使用createWebHistory 创建路由 地址不会有#号
// 后台是自己人用的 
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    NProgress.start()
    document.title = to.meta.title
    const role = localStorage.getItem('ms_name')
    const permissStore = usePermissStore()

    if (!role && to.meta.noAuth !== true) {
        next('/login') // login
    } else if (typeof to.meta.permiss == 'string' 
        && !permissStore.key.includes(to.meta.permiss) 
    ) {
        next('/403')
    } else {
        next()  // 不需要登录或者登录了，有相应权限的页面
    }
})

router.afterEach(()=>{
    NProgress.done()
})


export default router 
 