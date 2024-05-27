# 如何入手微信生态css开发
## weui第一个组件 BUtton
- weui
    微信山库

- button
    - 标签
    页面由标签组成 相当于小兵
    - 组件
    页面由组件组成 

- BEM 命名国际规范
    - 解决新手在写页面时结构一般不会有太大问题 但是在取类名时浪费时间(元素之间不关联
    每个取独立的名字) 
    - Block和Element之间有一个隶属关系__(两个下划线) 
    - page 是一个Block 区块
    - __hd __bd __title __desc  Element 子元素
    - Modifier 
        状态 _primary _default
- html 语义化标签
    p div 区别

- demo
    .cdlls 假如这是一个Block
        .cells_title
        .cells
            .cells__bd
            .cells__ft