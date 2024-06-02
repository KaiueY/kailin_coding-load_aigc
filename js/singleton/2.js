"use strict"
var name = 'koko'
let obj = {
    name: 'kailin'
}
let obj2 = {
    name: "yue",
    getName: function () {
        console.log("love");
        console.log(this.name);
    }
}
// 函数this指向是由运行方式来决定的
//对象的方法调用
// obj2.getName()
const fn = obj2.getName
// fn()// 以最普通的函数来运行 指向全局  undefined
// 在 Node.js 中，顶层 var 变量"name"不会自动成为 global 对象的属性。 在浏览器中会创建window.name
//如果启用严格模式 普通函数的this 不会指向全局 
//不论在哪都会报错TypeError: Cannot read properties of undefined (reading 'name')
fn.apply(obj2) //love yue
fn.apply(obj)//love kailin
//函数也是对象 可以被运行
//apply() 可以手动指定this为第一个参数  余下的传给函数运行的参数（收集余下的）
