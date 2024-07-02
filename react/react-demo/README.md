# 
    - npm init vite
        vite 代替 create-react-app 作为react项目的脚手架工具
        vite 快速的构建项目，提供了更好的开发体验

    - react 组件
        - 页面由组件构成  组件树
        - 组件是日常开发和协作的基本单元
        - html+css+js 可复用功能的组合
        - 组件类像html标签一样插入
        - 返回jsx的函数就是组件
        - 组件包含props(父组件传的参数)，自有状态
        - 类组件 用class声明

    - es6 的功能
        - class 让js 成为大型企业级的开发语言 传统的面向对象，设计模式好用起来
            原型面向对象 让其他开发者不太熟悉 class只是语法糖 底层还是prototype
        - extends 轻松实现继承 面向对象层次更加细腻
        面向对象
        - 封装 
        - 继承
        - 多态
        - 以react源码为例 Compotnent 组件基类
            constructor super(props) 基类构造函数先执行
            构造自己的状态
            必须重写render方法 返回组件的jsx 

- react 的核心
    - dom 编程已经过去 document.getElementById('') innerText()
    性能不好 硬编程
    - 组件的动态部分(状态) 隐藏/显示
        - this.state = {
            name: 'zhangsan',
            emoji: '😀'
            }
        - this.setState({
            name: 'lisi'
            emoji: '😂'
        })
        - 响应式更新
            - 一旦状态改变，组件会自动重新渲染
        - 不再API编程 而是更好的focus在数据和状态上

# 组件生命周期
    <App/>
    - 先实例化 AppHeader
    - componentDidMount  Component 的生命周期函数 jsx渲染完成后执行
       AppHea有DOM 结构挂到App上后才运行 自动运行
    - 启动定时器 修改状态 界面(得有那个节点)自动更新
    - constructor() 启动定时器 dom 还没有挂载上去
    
            