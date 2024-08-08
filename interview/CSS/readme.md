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


# 清除浮动
    - 在浮动元素的最后面添加一个空容器，在他身上加上一个clear:+(浮动方向) 也可以
      直接clear:both

    - 在父容器的伪元素添加clear: both

    - bfc


# 谈谈你对BFC的理解
    -  Block-formathing-context
    - bfc是css中的一种兼做快级格式化上下文的容器，他拥有一些特殊的渲染规则
        - 1 bfc容器中的子元素依然是按照正常容器的渲染规则
        - 2 bfc容器在计算高度时，会将里面浮动的子容器的高度也计算在内
        - 3 bfc容器的子容器的margin-top不会和自己的margin-top重叠
    - 触发条件 把容器变成bfc容器
        - 1 overflow:hidden || auto || overlay || scroll
        - 2 float: letf || right
        - 3 display : inline-block || flex || inline-flex || inline-table || table-xxx || grid 
        - 4 position:absolute || fixed


    - 应用场景
        1.清除浮动
        2.



# 你知道那些可以水平垂直居中的方法吗？
    - 如果已知父子容器的宽高 
        - 对子容器设置 margin-top 和 margin-left 为(父容器高度/宽度- 子容器高度/宽度)/2
    - 已知子容器宽高: 
        - position + margin : 负值
    
    - 未知子容器的宽高
        - flex
        - position + translate
        - grid
        - table
    - text-aline：center 控制非块级容器水平居中



# 如何实现两栏布局 三栏布局
    ## 要想到优先渲染 让主要内容优先渲染
    - flex  + order(默认为0的属性)
    - 圣杯布局
    - 双飞翼布局
    - grid 
    - table


# 说说弹性盒子
    - CSS中提供了display设置为flex的方法，flex属性可以将一个容器变成弹性容器，可以简便，响应式的实现页面布局
    
    - 属性
        父容器: justify-content:center  主轴居中
        子容器:
    - 应用场景
        1.水平居中
        2.多栏布局
    - 


# 地方