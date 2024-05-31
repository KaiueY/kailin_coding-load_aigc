function Duck(nickname){
    // console.log(this);
    this.nickname=nickname
}
Duck.prototype.singing=function(){
    console.log('gagag');
}
Duck.prototype.walk=function(){
    console.log('walking');
}
// es6 reset 运算符
function myNew(Fun,...args) {
    // console.log(arguments);
    // console.log(args);
    // let a=1//简单数据类型 内存在栈内存
    // let b=a//会完成值的拷贝
    let obj={} //对象 内存在堆内存中  地址引用
    Fun.apply(obj,args)
    // console.log(obj,"fdfd");
    obj.__proto__= Fun.prototype//原型对象
    return obj
}
// let duck=new Duck("Tangly")
let duck = myNew(Duck,'Tangly','Mikey')
console.log(duck.nickname);
duck.singing()