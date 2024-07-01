let a = 'TOM'

let = 'Hello, ' + a + '!' 

let c = `Hello, ${a}! How are you` //模板字符串

console.log(c.includes('Hello'));//true
console.log(c.startsWith('Hello'));//true  区分大小写
console.log(c.endsWith('you'));//true  后面不能有空格 


//数值的扩展
 let num =123
 console.log(Number.isNaN(num));//false
