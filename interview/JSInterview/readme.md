# 数组上有哪些方法呢
    增加: push(后面加) unshift(前面加) splice() ,concat()
    删除: pop , shift , slice , splice ,
    修改: wu
    查: includes ,indexOf() ,lastIndexOf(),find(回调,找一个),finLast,findIndex,findLastIndex,,every ,,some,

    转换:reverse  sort  toReversed  ,toString ,join , toSorted
    迭代: foorEach ,map ,filter,reduce(()=>{},x) 

# 字符串上有哪些方法
    增: concat()  
    删: slice() substring()
    改: trim,trimLeft,trimRight,padStart,padEnd,replace,toUppercase,toLowerCase,
    查:indexOf,lastIndexof,includes,charAt,starWith,endWith,

    转换: parseInt() ,splite,

# 谈谈js中的类型转换机制
    是什么: JS中呢存在两种数据类型，一种是基本数据类型，另一种是引用数据类型，在我们开发中呢，经常需要将引用类型转换为原始类型，这种是显示转换，还有可能js引擎执行操作是会自动转换类型，成为隐式类型转换，
    - 显式
    - 隐式 []==![] //true   + - * / % if while == 会发生隐式类型转换

# == vs ===


# 拷贝
    - 因为JS中原始类型的引用存在调用栈里面，引用类型的引用存在堆里面，在实际开发过程中，我们需要复制一份原对象，分为两种，深拷贝和浅拷贝，主要区别就是是否复制对象会受到原对象的影响。
    JS新增了structedClon()
    手写时注意身拷贝要考虑value值为引用类型

    深拷贝的实现还有一种 使用管道通讯
    function deepClon(obj){
        const {port1,port2} = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage= function(msg){
            console.log(msg.data)
        }

    }
# 聊聊你对闭包的概念，应用场景
    - 根据作用域的规则，内部函数总还可以访问外部函数中的变量，又有当一个函数执行完毕，该函数的执行上下文会被销毁，为了同时满足这个规则，闭包这个概念就出现了，当内部函被拿到外部函数中调用，即使外部函数执行完毕，也不会完全销毁，被内部函数引用的部分部分会以一个集合的而方式保存在调用栈，这个集合就叫做闭包
    - 缺点：内存泄漏    调用栈的空间有限 如果闭包产生过多则会会导致内存泄漏，
    - 优点，创建私有变量，延长变量的生命周期

    - 应用:
        封装模块 ，防抖节流。

# 作用域的理解
    - 变量或者函数生效的那个区域
        - 全局作用域
        - 函数作用域
        - 块级作用域

        暂时性死区：不能访问当前作用域已有的外部变量，哪怕内部不合法。有女朋友哪怕吵架也不能出轨。

# JS中的继承
    - 原型链继承 -- 之类的prototype=new父类() 子类的实例之间会共享从父类继承到的引用类型而相互影响
    - 构造函数继承 --  字类中 父类.call(this) 无法继承父类原型上的属性
    - 组合继承 -- 父类需要执行两遍

    - 原型式继承  Object.create(obj)创建一个对象并继承obj中的属性  多个实例间继承的引用类型的数据是共享的  
    

# 