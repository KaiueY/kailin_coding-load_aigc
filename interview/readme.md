1. 重绘和重排
    重排  
        布局信息发生改变的时候

    重绘
        html DOM树 ——CSSOM树 = render树
        -> layout 树  分层  -> 图层的合成 
        -> 交给渲染引擎 -> 绘制 -> 

        是动态修改的

        重排一定会重绘  

        重绘不一定会重排 

    - 优化
        - 从js引擎去到 浏览器渲染引擎  有点慢
            .style.color
            .style
            减少style 用类名切换

        让DOM 先下线
            display:none
            文档碎片

        - CSS 动画 或动态效果
            不用style来做 交给css动画（浏览器优化）

            - 一万条数据渲染
                - 文档碎片
                - 定时器
                - requestAnimationFrame 比 setTimeOut 更靠谱    
                    刷帧率
                减少offsetWidth offsetHeight 等属性的调用 立马出发重绘重排

            
2. GIt
    - 日常提交

    - branch 分支 在自己的分支上写代码

    - 当分支调试成功 可以合并到主分支
    
    - 规范
        - commit记录
    - log   

    - 回退……比对


   - 
3. GET 和   POST区别
    分局restfull 一切皆资源
    GRT 请求
    POST 希求
    PATCh

4. vue组建通信
    - 父子通信 definPorps definEmits  缺点 一级一级传递
    - pinia 数据共享  作为一个中央store
    provide/inject vue-router 看了源码
    - vuex mutation 


5. Vue2/vue3的区别

    - 生命周期
        beforeCreate/created/beforeMount/mounted/beforeUpdate/updated/beforeDestroy/destroye
            onBeforeMount
            onMounted
            onBeforeUpdate
            onUpdated
            onBeforeUnmount
            onUnmounted
            onActivated
            onDeactivated
            onErrorCaptured
            onRenderTracked
            onRenderTriggered
    - ts支持
        vue3全面支持ts大型项目
    - Composition API
        Vue3 引入了 Composition API，提供了一种新的方式来组织和复用代码：

        Composition API：允许开发者通过函数的方式组织逻辑，解决了 Vue2 中 mixin 带来的命名冲突和逻辑分散问题。
        主要包括 setup 函数、ref、reactive、computed 等。
        Options API：Vue2 主要使用 Options API，逻辑通过组件的各个选项（如 data、methods、computed 等）来组织。
    - 响应式原理
    - diff算法

6. 判断空对象

    Object.keys 方法：获取对象的所有键，检查键的长度是否为 0。

        const isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0;
        };
    
    for...in 循环：遍历对象的键，如果能遍历到键，说明对象不为空。

        const isEmptyObject = (obj) => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
            return false;
            }
        }
        return true;
        };

    JSON.stringify 方法：将对象转换为 JSON 字符串，检查是否等于 {}。


        const isEmptyObject = (obj) => {
        return JSON.stringify(obj) === '{}';
        };

    直接比较方法：检查对象是否等于一个空对象。


        const isEmptyObject = (obj) => {
        return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
        };

# Vue 生命周期
    1. 创建阶段
        beforeCreate

        组件实例刚刚被创建，组件属性计算之前。
        此时组件实例的 $el 和数据对象都还没有被初始化。
        常用场景：初始化非响应式属性。

        created

        组件实例创建完成，属性已经绑定，但 DOM 还未生成。
        此时可以访问数据、修改数据、调用方法。
        常用场景：进行数据获取、初始化数据等操作。

        2. 挂载阶段
        beforeMount

        组件的 el 和 template 在内存中编译完成，但尚未挂载到 DOM。
        常用场景：在渲染到页面之前执行一些准备工作。
        
        mounted

        组件被挂载到 DOM 上。
        此时可以访问 DOM 元素和进行与 DOM 相关的操作。
        常用场景：操作 DOM、获取 DOM 元素、第三方库初始化。
        3. 更新阶段
        
        beforeUpdate

        数据更新之前调用，组件重新渲染之前。
        此时仍可以进一步改变状态，不会触发重新渲染。
        常用场景：在组件重新渲染前做一些处理。
        
        updated

        组件数据更新并重新渲染之后调用。
        常用场景：操作更新后的 DOM、进行依赖于 DOM 的后续操作。
        4. 销毁阶段
        
        beforeDestroy

        组件实例销毁之前调用。
        此时实例仍然完全可用。
        常用场景：清理计时器、取消事件监听等。
        
        destroyed

        组件销毁之后调用。
        此时组件所有的事件监听器、子组件实例都已被销毁。
        常用场景：进行最后的清理工作。

# vuex 
    vuex是一套vue生态系统中，数据管理的设计模式，由state，getters，mutations，actions四部分构成，提出了单一状态树的
    概念，确保所有共享状态的组件共享的状态是唯一的，只有mutation可以修改状态，其他只能做读操作，所以对数据管理更加的严苛规范，提供了modules概念，数据管理可以按模块划分来管理。