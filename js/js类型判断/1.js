// let a = 1
// let b = { num: 2 }

//原始类型
let  str = 'hello'
let num = 123
let flag = false
let un = undefined
let nu=null

//引用类型
let obj={}
let arr=[]
let fn=function(){}
console.log(typeof(arr),typeof(obj),typeof(fn),typeof(nu));//object object function object
//除了function typeof不能正确判断引用类型  除了null 可以正确判断原始类型