import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/noteClass',
      component: () => import('@/views/noteClass.vue')
    },
    {
      path: '/login',
      meta:{
        title:'登录'
      },
      component: () => import('@/views/login.vue')
    },
    {
      path:'/register',
      meta:{
        title:'注册'
      },
      component: () => import ('@/views/register.vue')
    }

  ]
})
// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const whitePath = ['/login', '/register']
  if (!whitePath.includes(to.path)) {
    if (!localStorage.getItem('userInfo')) {
      router.push('/login')
      return
    }
  }
  next()
})

export default router