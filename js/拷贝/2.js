let a=1
let b=a
a=2

// console.log(b);// a改变了 但是b 的值依旧是1
let obj={
    age:18,
    b:[1,2]
}
let obj2= obj //将obj的引用地址给obj2
let obj3=Object.assign({}, obj);//将obj（后者）合并到{}（前者） 后者不受影响，前者受影响，返回合并后的对象
obj.age=20
console.log(obj2.age); //20  受影响 浅拷贝
console.log(obj3.age); //18  不受影响 深拷贝?
obj3.b.push(3)
console.log(obj3.b);//[ 1, 2, 3 ] 又受影响了 所以 为浅拷贝
