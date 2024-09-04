## 读vuex源码


- es6 class
    - 帮助我们组织 install dispath commit 等方法 面向对象的思想
    - this._state 四有事变量封装 响应式的细节
    - 提供get state属性 简化了调用API
        不提供set state 要修改，走mutations，
    - 私有属性的魅力 mutations actions 都不可以直接调用 先用私有属性存下来
    - getters public属性
        Object.keys()拿到option.getters 所有的key
        便利一下 拿到fn并通过computed 返回一个方法 将this.state 传过去
        computed 理解更透了