import {createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


 const routes=[
    {
        path:'/index',
        component:Home
    },
    {
        path:'/bot',
        // 懒加载 在页面加载时不会加载该组件，只有在访问到该组件时才会加载
        component:()=>import('../views/Bot.vue')
    },
    {
        // path:'/hot',
        path:'/hot/:id',
        name:'hot',
        component:()=>import('../views/Hot.vue'),
        props:true
        
    }
 ]
const router = createRouter({
    history: createWebHistory(),
    routes: routes //对象key和value相同时可以省略key

}) 
export default router