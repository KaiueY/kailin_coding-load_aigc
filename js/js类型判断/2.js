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
let date =new Date()
console.log(str instanceof String);//false
console.log(num instanceof Number);//false
console.log(flag instanceof Boolean);//false
console.log(arr instanceof Array);//true
console.log(obj instanceof Object);//true
console.log(date instanceof Date );//true
console.log(arr instanceof Object);//true

var array =[] //new Array
//array.__proto__=Array .prototype
// Array.prototype.__proto__=Object.prototype