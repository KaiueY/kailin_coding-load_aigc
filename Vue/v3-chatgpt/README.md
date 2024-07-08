# 企业级vue3 开发，商业项目
- 项目架构
    - vue-router 单页应用 路由功能
    - 

- 理解项目需求
    - url改变 但是 #hash  不会刷新当前页面  单页应用的要求
    - 如何利用hashChange事件监听hash的变化 
        找到router-view的位置，根据hash的变化，动态的渲染组件
    - 路由分为两种 hashHistory #home 兼容性更好  锚链接
        localhost:8080/#home
        localhost:8080/#about
    - 来自锚链接的原生能力
        <a href="#home" >Home</a> <a name="about" ></a>
        url + '#home' 同时把 我们送到home部位 不会刷新

- tailwindcss 原子css 外包的好帮手 95%的css都可以用tailwindcss完成
    - 安装
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        npx tailwindcss init tailwind.config.full.js --full
    - 一个css框架
- tailwindcss
    - 原子css
    - 4 = 1rem
    - py ml
    - css 带来了语义化css

- 复杂的页面状态
    希望input可以兼具apikey的保存和聊天功能
    状态驱动界面

- 手写chatgpt
    - openai 聊天模型
        - model ： gpt-3.5-turbo
        聊天是有上下文的 所以是数组 把最近几次的聊天记录传递给openai 上下文越多，反馈越准确
        - messages 
        - role
            system chat bot角色
            assistant OpenAI派出的助手
            user 提问
            assistant 回答