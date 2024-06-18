let a={}
let b=[]
let c ='hello'
console.log(Object.prototype.toString(a));//[object Object]
console.log(Object.prototype.toString(b));//[object Object]
console.log(Object.prototype.toString.call(b));//[object Array]
console.log(Object.prototype.toString.call(c));//[object String]
console.log(c.toString());//hello