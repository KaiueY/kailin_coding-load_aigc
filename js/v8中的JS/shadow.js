let obj={
    a:1
}
let obj2=Object.create(obj);
obj.a=2;
console.log(obj2.a);// 2

let arr = [1,2,3,4,{a:1}]
let arr2= [0].concat(arr) // 也是返回一个数组，但不会影响其他，会创造一个新数组，将两者合并。
let arr3=[...arr]
let arr4=arr.slice(0)
let arr5=arr.toReversed().reverse()
console.log(arr2); // [ 0, 1, 2, 3, 4 ]
arr.push(5)
arr[4].a = 2
console.log(arr2); // [ 0, 1, 2, 3, 4 ] 没有改变  深拷贝？
console.log(arr2[5].a) ; //2  如果在arr中加一个对象{a:1}  那么它又受影响了  所以 就是浅拷贝  不够深
console.log(arr3);//[ 1, 2, 3, 4, { a: 2 } ]  解构
console.log(arr4);//[ 1, 2, 3, 4, { a: 2 } ]  从零分割 得到新数组
console.log(arr5);//[ 1, 2, 3, 4, { a: 2 } ]  反转再反转  toReverse会创造一个新的数组
