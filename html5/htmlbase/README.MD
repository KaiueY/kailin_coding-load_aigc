# 记录一下字节训练营的查漏补缺

## html+CSS 篇
### 选择器
###### 选择器的优先级
    -   !important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符选择器 > 继承 > 浏览器默认属性
    -   属性选择器：a[href^="#"] 
    -   ^= ：以^=开头  
    -   $= ：以$=结尾 
#### 组合选择器
#### 组合选择器
    - 直接组合: `AB` - 满足A同时满足B    - `input:focus`
    - 后代组合: `A B` - 选中B，如果它是A的子孙    - `nav a`
    - 亲子组合: `A > B` - 选中B，如果它是A的子元素    - `section > p`
    - 兄弟选择器: `A ~ B` - 选中B，如果它在A后且和A同级    - `h2 ~ p`
    - 相邻选择器: `A + B` - 选中B，如果它紧跟在A后面    - `h2 + p`
    - 选择器组: `A, B` - 选中A或B    - `h1, h2, h3`
### 伪类
#### 伪类选择器
    -   a:link - 默认状态
    -   a:visited - 访问过的状态,点击过的链接样式
    -   a:hover - 鼠标悬停状态
    -   a:active - 链接被点击时的状态
    -   a:focus - 链接被聚焦时的状态
#### 结构伪类
    li:first-child - 父元素的第一个li子元素
    li:last-child - 父元素的最后一个li子元素
    li:nth-child(2) - 父元素的第二个li子元素
    li:nth-child(odd) - 父元素的奇数li子元素
    li:nth-child(even) - 父元素的偶数li子元素
    li:nth-child(2n+1) - 父元素的奇数li子元素
    li:nth-child(2n) - 父元素的偶数li子元素
#### 伪元素
    -   ::before - 在元素内部的最前面插入内容
    -   ::after - 在元素内部的最后面插入内容
    -   ::first-letter - 选中元素的第一个字母
    -   ::first-line - 选中元素的第一行
    -   ::selection - 选中文本的样式

### RGB 颜色
#### HSL(Hue, Saturation, Lightness)
    -   Hue: 色相，取值范围0-360
    -   Saturation: 饱和度，取值范围0%-100%
    -   Lightness: 亮度，取值范围0%-100%
    -   HSLA: HSL + Alpha透明度
#### RGBA(red, green, blue, alpha)
    - R - 红色值，取值范围0-255
    - G - 绿色值，取值范围0-255
    - B - 蓝色值，取值范围0-255
    - A - 透明度，取值范围0-1
#### 字体
    - font-family: 字体 
    - font-size: 字体大小
    - font-weight: 字体粗细
    - font-style: 字体样式
    - font-variant: 字体变体
    - font: 综合属性