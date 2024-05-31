function Duck() {

}
//函数表达式
//js 变量类型由值决定
var Singleton = function (name) {
    this.name = name
}
var obj1 = new Singleton('kkk')
var obj2 = new Singleton('kkk')
console.log(obj3 === obj2, obj1.name === obj2.name);

var obj={'a':1}
var obj3={'a':1}
var obj4=obj 
console.log(obj.a ,obj4==obj3); 