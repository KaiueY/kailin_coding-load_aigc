# 项目亮点 难点之hook

- 何为hooks
    以use开头的函数  带来了函数式编程（OOP）推到了一个新的高度
    将响应式业务（ref reactive 生命周期 method）封装的函数
    响应式业务的复用和维护方便，可以把响应式业务从组件里拆开放到hooks函数中复用

    封装响应式业务的细节， 对团队协作友好
    极大的提升了生产效率

    utils 工具函数
    vue2 vue3 的核心区别 函数式编程
    vue 2 是option api 选项式api -> vue3 setup api 组合式API
    Vue2中

- IntersectionObserver 是一个JavaScript 接口 用于监控一个元素是否出现在视口viewport中
    可以用于图片懒加载的全新API
    - 观察者模式 observe（DOM）
    - 实例化的回调函数里 返回所有被观察的元素的情况
    - isIntersecting true 就在可视区
    - 完成后取消监听
    - 比其他方案的图片懒加载更高级
    - 
    - requestAnimationFrame  按刷帧率来执行