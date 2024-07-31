# 说说你对CSS盒子模型的理解
    1. 是什么？
        当浏览器在渲染一个html容器时，会根据某一个标准来绘制出一个矩形，
        该矩形包含content、padding、margin、border


    2. 有哪些盒模型
        - 标准盒模型: width = content  
                    总宽度 = width + padding +border +margin
        - IE盒模型 : width = content + padding + border
                    总宽度 = width +margin
    在项目开发中 如果给内容增加内边距 就可能会把内容撑大
    设置box-sizing 为border-box可以解决
    box-sizing: border-box || content-box（标准）

    3. 应用场景

# 说说css选择器有哪些？优先级是怎样的？
    - 
    1.id
    2.class
    3.标签
    4.后代
    5.子集选择器
    6.兄弟选择器
    7.群组选择器
    8.伪类选择器
    9.伪元素选择器
    10.属性选择器
    - 优先级
        important > 内联样式 > id > 类 > 后代 = 子集 =兄弟（后来者会覆盖前者） > 标签 > 


# 说说em px rem vw vh
    - 是什么 
        都是css中的长度单位 灵活运用可以做不同的适配
    
    - 区别 
        em和rem : em是相对父容器字体大小的长度 rem时相对于html根标签的大小长度 默认16px

# css中有哪些隐藏容器的方式 区别是
    - display: none         无文档流 无法交互
    - opacity: 0            有文档流 可以交互
    - height: 0 width: 0    无文档流 无法交互
    - visibility:hidden     无文档流  无法交互 但占据空间
    - clip-path:polygon(..) 裁剪为不可见 有文档流 但不可见 无法绑定
    - transsform.scale(0)   将元素缩放到不可见