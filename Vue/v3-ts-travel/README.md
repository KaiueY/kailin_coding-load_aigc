# 大厂项目技能点分析

- 全家桶
- TypeScript JS超集
    - 在路由配置文件添加RouterRecordRaw 类型约束 
        一般的约束  : 泛型
        当使用ref这种响应式数据时 如： ref<泛型>
    - types 目录是类型定义的专属目录 按模块声明类型 
    export type  typeName = {   }
    - .vue文件中加入 lang="ts" 支持
    - interface 接口 也可以用于类型的定义  
        - login页面 使用interface 声明LoginInfo 接口 包含 username password 两个字段 类似于type
    - 组件约束props 
        interface Props{
            username:string;
    - 函数中类型约束 
            export const getCurrency = (price:number) =>{
                return `¥ ${price.toFixed(2)}`
                }
- 工程化 vite
    - vite 快
    - 先编译再运行
        开发时写的是ts 
        scss -> css 一样
    - alias 配置
        @ -> src 
        path.resolve(__dirname,"./src")更严谨
        在ts项目里 我手动安装 @types/node  node 的类型文件
    - vant 自动加载
        借助vite工程化 中的 unplugin-vue-components 插件 @vant/auto-import-resolver 将vant的加载放到vite启动运行阶段 项目启动更快 首页不用加载vant了
    - 按需加载组件库的组件
- 使用了vant UI组件库
    - 选择vant 加速开发 不用重复造轮子
    - 从组件库中可以观看组件的开发文档 学习一些组件的写法和美化 比如 具名插槽
         - 组件的定制性
    - van-search keep-alive
    - van-field van-form (model + rules)
    - 组件使用 项目正在使用的UI组件库 公司的开发文档
    - 
- hooks  useRouter  手写自定义hook
- 高质量的组件
- tailwindcss 做界面 体现css能力
    安装tailwindcss
    原子化的css
    基本不怎么写css 很快
    好处
    在某些地方 如果不用渐变 就可能用到图片 图片获取要发送http请求 图片比较大时不利于性能
    - flex 
        flex-direction self-items
    - 了解@apply 的进阶功能
        tailwindcss 缺点是类名要写一大堆
        @apply 可以把一大堆类名交给一个类 放在 css/common.css复用
        但是@apply也有缺点 不建议大量使用

- HTML5 能力点
    语义化标签
    localstorage
    observer
- es6
    - 解构 moudle 
        import from + 目标需要 export/export default
        import * as R 
        import R, {x,y} from ''
        import type R 


- css
    - flex  flex:0 0 auto   col flex-end flex:1
    - gradient
    - tailwind Ai结合 语义化

- 组件化思想
    - 可以复用
    - 降低页面的复杂性 提升代码的可维护性
        - props 父子数据通信
        - 当然可以直接从pinia仓库拿到数据 但是越权不太合理 还是由父组件去拿
        - 组件只需要负责显示 性能更好
    - 
- vue 语法考点安排
    - 插槽
    - toRefs
        将store 变成组件方便解构的响应式对象
        当一个响应式对象直接解构时，他的属性会丢失响应式 因为解构的是值
        可以使用toRefs 将响应式对象方便的拆解为多个独立的响应式引用式对象
    - keep alive
        vue 性能优化的语法
        - 因为router-view 路由的切换 组件会重新渲染
        - 首页不应该被卸载  因为需要频繁地回到首页 所以只需要加载一次
        - 为了提升用户体验 使用keep alive 不卸载组件 只切换页面
        - 适用于任何需要缓存的组件
        - v-slot 插槽指令 指定内部的slot 部分即渲染组件
        - keep-alive 全局组件 缓存组件 性能优化 


    - watch
    - 懒加载
    - 性能优化
        路由懒加载
        gradient
        vite vant
        - keep-alive
            - :include 属性 route-name 是一个数组  判断route.meta.cache |route,meta.keepAlive
            - 通过computed计算属性 + useRouter 
                得到router.allRoutes().filter.map() 
    - 防抖节流
- 项目写法
    - 先选择项目
        Ai项目 : 豆包/通义千问/星火/
        大厂的热门项目 小红书 蔚来 小米 ……移动端的
    -vant
    - HTML5
    - pinia toRefs() 流程
    - 项目架构
        - src 开发目录
            - router 
            - views
            - components
            - store
            - assets
            - utils
            - types
            - api
            - hooks
            

- 首页功能介绍
 
- 登录页功能介绍
    - van-form model rule
    - van-field  checkbox 自定义
        template#input
        van-checkbox v-model="checked"
        说明 ....
    - ts interface 约束 LoginInfo
        ref<>
