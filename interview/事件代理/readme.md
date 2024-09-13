# JS中的事件流
1. 捕获阶段 -- 事件从window处往目标处传播 （捕鱼撒网）
2. 目标阶段 -- 在目标处触发事件 （鱼被网捉住）
3. 冒泡阶段 -- 事件从目标处往Window处传播

- e.stopPropagation();
   事件对象原型链上的方法，可以阻止事件传播，可以阻止冒泡和传播
- e.stopImmediatePropagation();
    事件对象原型链上的方法，可以阻止事件传播，可以阻止冒泡和传播，这点和stopPropagation一样，还可以阻止后续事件的执行，阻止同一个容器绑定的其他事件的执行

# DOM0 vs DOM2
    - DOM0: onCLick...
       无法人为修改事件在捕获或冒泡阶段执行
    - DOM2: addEventListener/removeEventListener
        - 可以人为修改事件在捕获或冒泡阶段执行
            addEventListener(type, listener, useCapture)
            removeEventListener(type, listener, useCapture)
            useCapture: true -- 捕获阶段执行
                        false -- 冒泡阶段执行
        - 可以为同一个元素的同一个事件添加多个事件处理函数

# 事件代理
    把元素身上需要响应的事件，委托到另一个元素（通常是父元素）上
    e.target -- 事件源
    e.currentTarget -- 事件处理函数绑定的元素
    优点：
        - 减少内存消耗
        - 减少事件绑定次数
        - 可以实现动态绑定事件

# 特例（无事件流）
    focus、blur、mouseenter、mouseleave、load、unload、resize、scroll、change、submit、reset、select、error