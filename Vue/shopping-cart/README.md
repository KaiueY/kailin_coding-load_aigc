# 购物车
- 库存的维护 inventory

## 数据管理
- api 
    商品数据接口
- 商品数据
    getProducts
- 购物车数据


## 面试表达亮点
    - 介绍怎么学习的
        vue 数据管理学习了 vuex/pinia
        其中 vuex/是数据管理的设计模式（哲学）
        - createStore 返回单一状态树 共享状态就不会出问题 
            store.state.products.all 树状结构  每一个状态都是一个节点
        - 大型应用可以按状态的模块化来管理小型的放全局就好
        - 每个模块的数据流程由state负责状态 mutations actions getters 
        - dispatch action commit mutation vuex的设计模式
        - mutations 让数据管理更严格  APP = 用户界面组件 + 状态管理
        - pinia 在 vue3 推出hooks 更方便 defineStore 函数式编程自带模块化能力 hooks：封装响应式状态和业务的函数
    - 简历技能点vuex/pinia
    - vuex 比 pinia 复杂 
        - createStore 返回一个单一状态树 状态就是树上的节点
            vuex 提供了modules  模块化 状态树分支模块化管理 namespaced 
        - pinia defineStore 模块化由hook完成 简单好理解
        - vuex 有mutations概念 要修改数据必须commit mutations 数据管理更加严格
            数据共享 数据不出问题 读操作不会出问题，写操作都由mutations管理  mutations是一种修改规范
        - pinia没有mutations的概念 


- actions和mutations的区别
    - action是可以异步操作  请求借口/业务逻辑
    - mutations 只做简单且清晰的状态修改规定
    - dispatch action
    - commit mutation
- cart 购物车的状态设置
        items:[{
            id:1,
            quantity:1
        }]

