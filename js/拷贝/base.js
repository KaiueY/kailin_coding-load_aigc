Object.prototype.c=3
let obj={
    a:1,
    b:{n:2}
    // c:function foo() {
    // }
}
let arr=[1,2,3,4,5,6,7,8]
for(let key in obj) {   //key 只是一个形参 随意 key是对象属性
    console.log(key, obj[key]);
}
// for(let key in arr) { //key指的是下标
//     console.log(key, arr[key]);
// }
console.log(obj.c); 
//  当我们提前在Object显示原型增加一个属性c 在循环中也能得到c
// 对象显式和隐式拥有的属性在for in中都能遍历得到
