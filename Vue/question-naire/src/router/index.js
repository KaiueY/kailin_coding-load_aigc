import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      name:'Home',
      component:()=>import('@/views/home.vue')
    },
    {
      path:'/item',
      name:'Item',
      component:()=>import('@/views/item.vue')
    },
    {
      path:'/score',
      name:'Score',
      component:()=>import('@/views/score.vue')
    },
  ]
})

export default router
