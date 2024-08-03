#  大厂项目技能点分析
- 全家桶
- 不要搞后端  假数据 
- Typescript  js超集
    - 在路由配置文件添加 RouterRecordRaw 类型约束
    - pinia 里所有响应式数据都要添加类型约束 ref<泛型>
    - types 目录是类型定义的专属目录， 按模块申明类型
    export type  typeName = {   type不属于js , 是ts的 
    }
    - .vue 文件中加入 lang="ts"支持 
- 工程化 vite 
    - 快
    - 先编译再运行 
        开发时写的时ts, 编译后js 运行
        scss -> css  一样 
    - alias配置
        @ -> src 
        path.resolve(__dirname, "./src") 更严谨
        在ts 项目里我手动安装 @types/node   node 的类型文件
    - vant 自动加载
        借助vite 工程化 unplugin-vue-components 插件 @vant/auto-import-resolver  加vant 的加载放到vite 启动运行阶段
        项目启动更快，因为首页不需要再加载vant了
    -  按需加载组件库的组件  
- 使用了vant UI组件库
    - 选择vant 加速开发，不用重复造轮子 
    - 组件开发文档
    - 学习到很多组件的写法 比如 具名插槽
        - 组件的定制性
        - 
- hooks useRouter 手写自定义一个hook 
- 高质量的组件 
- tailwindcss  界面 css能力较强
    - 安装tailwindcss 
    - 原子化的css 
    - 基本不用怎么写css, 很快
    - bg-gradient-to-b from-orange-500 to-orange-300 
    - 如果不用渐变， 就要用图片吧（发送http请求+ 图片比较大 ）？
    - flex 
        flex-direction self-items  flex: flex-basic flex-shrink flex-grow  
- html5 的的能力点 
    语义化标签 
        main 
    localStorage
    observer 
- es6
    - es6 module 
        import from + export/export default 
        import * as  R 
        import R, {x,y} from '
        import type R 
- vue 语法考点安排
    - 插槽
    - toRefs 
        将store 变成组件方便解构的响应式对象
    - watch 
    - 懒加载
    - 性能优化
    - 防抖节流