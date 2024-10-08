import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      // 页面级别组件 专属文件夹views
      component:()=>import('../views/home.vue')
    },
    {
      path:'/about',
      name:'about',
      component:()=>import('../views/about.vue')
    }
  ]
})

export default router
