"use strict"
var name='k'
let obj ={
    name :'kailin'
}
let obj2={
    name :"yue",
    getName:function () {
        console.log("love");
        console.log(this.name);
    }
}
// 函数this指向是由运行方式来决定的
//对象的方法调用
// obj2.getName()
const fn = obj2.getName
// 以最普通的函数来运行 指向全局  undefined
//如果启用严格模式 普通函数的this 为undefined
//apply 可以手动指定this为第一个参数  余下的传给
fn.apply(obj2)