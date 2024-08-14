import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/noteClass',
      name:'noteClass',
      meta:{
        title:'noteClass'
      },
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
    },
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/noteList',
      meta:{
        title:'noteList'
      },
      component:()=>import('@/views/noteList.vue')
    },
     {
      path:'/noteDetail',
      meta:{
        title:'noteDetail'
      },
      component:()=>import('@/views/noteDetail.vue')
    },
    {
      path:'/notePush',
      meta:{
        title:'notePush'
      },
      component:()=>import('@/views/notePush.vue')
    }

  ]
})
// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const whitePath = ['/login', '/register','/noteClass']
  if (!whitePath.includes(to.path)) { //需要登录
    // 判断浏览器本地有无userInfo
    if (!localStorage.getItem('userInfo')) { //没登录
      router.push('/login')
      return
    }
  }
  next()
})

export default router