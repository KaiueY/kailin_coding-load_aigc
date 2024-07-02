# react 组件化 大型团队的协作

- 脚手架 
     create-react-app  官方
     npm init vite 速度快 用vite来初始化 进行选择 react+js

- index.html 首页
    root挂载点
- src/main.jsx 单点入口
- 根节点
    - root.render
    - react.createElement
- 组件 
    components  
    - 根组件 App
        - JSX 里用html标签的方式来插入
        - 标签不是html内置标签 而是组件本身
    - 子组件 
    - 旧开发打理的是真实DOM树
    - 组件树 （React组件树) 子组件
    


- 关系
    - 网页(#root)<- 由组件组成(App) <- 由element节点组成 <- 由元素组成+CSS+JS <- 由标签组成 

- 模块化
    script 默认不支持模块化 早期的前端处理业务简单 主要是DOM交互和事件
    不存在太多扩文件的需求，所以简单 没有模块化

    - node v8引擎封装到命令行 js解析  数据库  文件 网络...
        require+module.exports
        - es6模块化 前端app越来越复杂 很复杂 有几万个组件拼起来
        - commonjs不太优秀  推出了es6 module
        - script type="module"  打开浏览器的模块化支持
        - 一个文件只做一件事 
