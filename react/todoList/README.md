# TodoList

- 组件拆分能力
    - 编程思维
    - 组件就是扛事的，组件化思想 页面由组件构成，而不是html
    - react/vue 组件的能力强大powerful 
        有props, state, 生命周期,等等

    - css 单独编写
    - 数据管理
        - 如果都要用 那么就交给父组件
        - props 来传递下去
        - todos 
            数据使用
            - TodoList 父子组件
                - TodoItem  props(参数)
        - TOdoForm
        - 父组件把操作数据的方法都准备好了
        - 子组件安心的负责渲染

        父组件负责数据的管理 子组件负责渲染

    - 数据状态的一致性 
        - 表单组件比较复杂
        - 表单组件也叫受控组件
        - inputText state
        - 数据和状态是要一一对应的
        - input 界面状态与inputText 绑定
        - value = {inputText} 数据绑定
        - onChange setState inputText 

    - 循环列表
        - Vue v-for
        - react { js 运行区域 返回值占位}
        {
            todos.map((todo, index) => (
                <TodoItem/>
            ))
        }
## 性能优化
    引擎包含渲染引擎和js引擎
        test.html中 每次添加span元素
        渲染引擎和js引擎之间的交互太多了
    - 过路费交的太多
    - 怎么解决呢？
        把一万次的字符串先拼接
        再一次性的添加到页面中
        做一次.innerHTML
    - 缓存dom节点

- 重绘 repain
    几何尺寸没有发生变化 但是样式发生了变化
- 重排 reflow 回流
    DOM修改 引发了DOM几何尺度的改变 （宽高 隐藏元素）
    自己之外的元素也会受到影响
重排比重绘更耗性能，所以重绘比重排快
        render tree -> 变化 -> 回流 -> 重绘 （提前写好一个class设置好样式，需要时加一个类名）

- 页面绘制
    HTML/CSS/JS资源  -> 浏览器内核 -> 页面绘制图像 
    parseHTML -> style 样式计算 -> layout 布局 -> paint 绘制 -> composite 整合图层合成
    三者都会阻塞页面的首次渲染 
- 渲染引擎
    - 不用等JS 
    - HTML 解析器 DOM parser
    - CSS 解析器 CSS parser 解析css文本 生成CSSOM树 
    - DOM树和CSSOM树合并 -> 渲染树 render tree
    - 图层布局计算模块
    - 视图绘制模块 进行像素级别的绘制 (CPU -> GPU)

- JS引擎 霸道的 可以随时叫停渲染引擎
    - 编译执行JS代码
    - 重绘 重排(尽量进行重绘 局部重排)


css selector 从右到左进行匹配
# myList li{

}

#myList .list-item{

}

- 避免使用通配符 如 * 
- 避免使用后代选择器 如 div a
- 关注可以通过继承实现的属性
- 不要画蛇添足
.myList
#title

- 减少嵌套
    开销高