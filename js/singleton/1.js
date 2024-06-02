function Duck(nickname){
    this.nickname=nickname
}
Duck.prototype.singing=function(){
    console.log('gagag');
}
Duck.prototype.walk=function(){
    console.log('walking');
}
// es6 reset 运算符args会接收其余所有值  
    function myNew(Fun,...args) {
    //arguments会接受所有参数 不需要args 打印arguments对象时会输出所有内容  这样有点复杂
    // console.log(arguments);
    // console.log(args);
    // let a=1//简单数据类型 内存在栈内存
    // let b=a//会完成值的拷贝
    let obj={} //对象 内存在堆内存中  地址引用
    Fun.apply(obj,args)//会运行Fun  将Fun中的this指向obj 并将args作为参数传进去
    // console.log(obj,"fdfd");
    obj.__proto__= Fu   n.prototype//原型对象
    return obj
}
// let duck=new Duck("Tangly")
let duck = myNew(Duck,'Tangly','Mikey')
console.log(duck.nickname);
duck.singing()
duck.walk()
