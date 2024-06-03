
//函数表达式
//js 变量类型由值决定
var Singleton = function (name) {
    this.name = name
}
var obj1 = new Singleton('kkk')
var obj2 = new Singleton('kkk')
var obj3=obj2
console.log(obj3 === obj2);