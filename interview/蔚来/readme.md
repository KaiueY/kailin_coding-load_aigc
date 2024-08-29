# 蔚来


## 一面
- 三数之和
- 手写发布订阅
- interface 和 type 
- 泛型
- vite 和 webpack
    - vite
        - vite 更快 更年轻  vue 尤雨溪推荐 
        - webpack 比较复杂 但是呢 定制性和功能性很强
        - 工程化套件
        - 开发阶段
        - 打包阶段
        - 上线阶段
        - stylus -> css
        - ts -> js
        - js -> es6+ ->es5  考虑兼容性
        - .vue -> loader plugin -->                         

    - node 命令行工具启动工程化
    - 5173 端口启动 web-server index.html 首页 #root挂载点
        src/main.js 作为入口  App.vue根组件渲染出来
    - webpack 三巨头
        - webpack 打包功能核心
        - webpack-cli 命令行工具
        - webpack-dev-server 服务器

    - 运行流程
        - npm run dev 脚本开始 webpack serve --open 
        - webpack-cli 命令行工具接到命令行的指令
            webpack先打包
                serve 8520
                --open 自动打开浏览器
        - webpack 打包
            - 读取根目录下的 webpack.config.js 配置文件
                - 模块化的module.exports
                - entry (入口main.js) + output (打包后可执行的 bundel.js)
                - devServer port + contentBase （首页）
                - plugins htmlwebpackplugin 
                
            - bundler
    - entry -> output 过程中
        - 处理想做的事情 module 模块功能 
            js中 es6+ -> es5 兼容性更好
        - 按照文件类型划分rules
            test 正则 文件类型
            - stylus  .stylus -> .css
            - js       es6->es5
            - ts       .ts->.js ->es5
            - .vue     vue->js+html+css
        - loader 加载器 babel-loader -> bable 转译 
    - entry main.js -> module -> rules -> test 文件类型 使用loader-> use ->loader
    babel 负责 js文件 进行js转译 es6+ -> es5
        - babel-loader 加载js到babel工作间  这就是加载器
        - @babel/core 转译器的核心功能
        - @babel/preset-env 预处理方式
        - 
# vite 和 webpack 有什么区别
    - vite 简单 比较快 它是bundless 不需要打包 
    - webpack 从入口到出口  打包成bundle.js 文件  文件数量太多 慢
    - webpack 学习成本较高 配置复杂 适合带星鲜蘑菇定制类项目的需求
    - vite 方便快捷
        以stylus 为例子  vite只需要安装stylus 插件即可
        而webpack 需要改配置 loader 等一堆

# 三数之和
    - 时间复杂度

    - 两数之和
        - hashTable O(n)
            思路 通过map数据结构 遍历数组nums 如果存在target-numi[i]，则返回结果
            如果没有，则将其存入map
    - 三数之和
        - 
    - 大数之和
# 发布订阅模式(event bus 时间总线)  
    自定义事件
    - 发布者 
    - 订阅者
    - 关系 cache = []
    - key 
    - once 只执行一次
    - off 移除订阅者
    -on 收集订阅者
    -emit 触发事件 通知所有订阅者

    - 手写题

    - EventEmitter 
    - 发布者通过emit发布消息 订阅者通过on 订阅

# type 和 interface的区别
    - 两者都是用来声明类型约束的
    - interface只能约束对象 
    - 都可以用于类型的声明，
    - type是类型别名，可以给简单数据提供类型别名，而interface不行
        只能给对象类型声明，
        如果是可选属性，加一个问号 ? 以分号隔开 可选择也可不选择
    - interface 支持继承

# 对泛型的理解
     - 

