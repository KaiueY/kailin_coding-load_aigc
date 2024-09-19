# vue 的能力

- 看过ElementPlus组件的源码，学习组件设计
    ElementPlus form表单
- 良好的组件设计
    - 使用typeScript 更加严谨
    - 更通用
    - 调用 app.use
    - 
- Dialog 组件
    - vue 内置的 teleport 组件 离开组件树的位置 到body上
    - slot 插槽提供定制性
    - 使用BEM 命名规范 
        - scoped 将当前组件的css不会影响外界 ，他会动态的添加data唯一属性 
        Vue 会为当前组件的所有元素生成一个独特的属性（例如 data-v-xxxx），并将这个属性附加到组件的 DOM 元素上。然后，Vue 将自动修改 CSS 选择器，使其只匹配带有这个独特属性的元素，从而实现样式的作用域限定。
        
