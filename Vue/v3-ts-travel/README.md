# 大厂项目技能点分析

- 全家桶
- TypeScript JS超集
    - 在路由配置文件添加RouterRecordRaw 类型约束 
        一般的约束  : 泛型
        当使用ref这种响应式数据时 如： ref<泛型>
    - types 目录是类型定义的专属目录 按模块声明类型 
    export type  typeName = {   }
    - .vue文件中加入 lang="ts" 支持
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
         - 
    - 
- hooks  useRouter  手写自定义hook
- 高质量的组件
- tailwindcss 做界面 体现css能力
    安装tailwindcss
    原子化的css
    基本不怎么写css 很快
    好处
    在某些地方 如果不用渐变 就可能用到图片 图片获取要发送http请求 图片比较大时不利于性能


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
        
- vue 语法考点安排
    - 插槽
    - toRefs
        将store 变成组件方便解构的响应式对象
    - watch
    - 懒加载
    - 性能优化
    - 防抖节流
