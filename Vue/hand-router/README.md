# vue-router 手写实现

- 路由守卫
  router.beforeEach
- 路由懒加载
    {
        path: '/about',
        component: () => import( './views/About.vue')
    }

- router-link router-view
- vue 组件
    - 自定义组件
    - transition 内置组件
    - 全局组件 在任何地方都可以直接使用
       app.component('router-link',RouterLink)
       - 如果组价没有引入 dom会把他当成一个普通的标签
       - app.component
         - app.use 

- router-link 是怎么工作的？
    - 来自于vue-router
    - vue.component('router-link',RouterLink) 全局组件的理解
    - vue.use() vue向插件生态中注入
    - router 插件 准备好install 方法

- <slot/> 插槽
    - 可以将组件的内部交给外部去自定义
    - 提升了组件的可复用性
    
- http://localhost:5173/posts/:id#/about
    - 协议 http://
    - 域名 localhost
    - 端口号 5173
    - 路径 /#/about
    - hash #/about
    - path / posts
    - query ?id=1
    - params /:id