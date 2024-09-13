# vue3 服务器端渲染

- vue3 可以在后端运行
    - 无论在前端还是后端 都是无所谓的 不过是运行需要内存和cpu 
    vue3 中把组件（除了template） VDOM 都是可以在后端运行的 响应式数据也是可以在后端运行的   
    真实渲染时，就会变成真正的DOM?  那不过是界面的渲染而已 

- SPA 单页应用 只有一个app挂载点  体验好 不会白屏

- SEO 友好
    当爬虫爬取页面时，只会爬取html文件，不会执行js文件，所以只会爬取到一个空白的html文件，给他一个html文件

- SSR 
     如CSDN网站  MVC 模板在服务器端编译 直接就生成html文件 
     - vue template + data  html string
    <template>
        <div>{{title}}</div>
    </template>

    - vue 服务端运行
    - 组件 Component 类
    - VDOM 服务器端
    - Component.template + Component.data =>（平台无关性） html string

    - SPA 流行
       - 现在是移动端的天下 ， 但是入口不在百度 SEO不重要 ， 基本不在使用搜索引擎搜索，而是通过分享，扫码等方式进入页面
       - 但是PC端还是需要SEO的 主要还是靠搜索引擎来进行搜索
        而爬虫 爬到完整的html文件，就可以进行检索了 /html
        - vue 可以在服务器端运行
            - vue.createSSRApp
            - component.ssrRender @vue/compiler-ssr
        - @vue/server-renderer 服务器端渲染 renderTostring方法可以做到
        - @vue/compiler-ssr  负责模版的编译

- nuxt 框架
    掘金就是用的nuxt框架开发的，