# vue 动画

- 页面动态效果
    - Transition css 属性的切换
    - animation 复杂
    - js 操作 style + requestAnimation
    - v-if v-show 如何在切换组件时添加动画效果？

- Vue 提供了一些内置组件 比如 transition 
- <component :is=""></component> 动态组件"

- 需要养成良好的编程风格
    - BEM 命名规范
    - 组件的思维
    - 写出优质的html/css代码
    - @import 根据地址引入css文件 分类引入 将css 模块化 
        - app.css 
        - card.css
        - 

- 动态效果
    - css transition 切换类名实现
    - css animation 复杂动画
    - 如果要更细致的定制效果 一些内置的类似生命周期的钩子类名
        vue 提供了transition 类名
        如果添加v-if/ v-show 切换组件或html片段的效果 内置组件transition 更好地服务于动画定制
        进场 .v-enter-from (开始) .v-enter-active (过程/立即激活) .v-enter-to (结束)
        出场 .v-leave-from (开始) .v-leave-active (过程/立即激活) .v-leave-to (结束)