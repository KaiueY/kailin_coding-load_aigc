//单例模式  有的类只实例化一次 性能比较好
var Singleton = function (name) {
    this.name = name
    // this.instance = null
}
Singleton.prototype.getName = function () {
    console.log(this.name);
}
//静态方法  属于类
Singleton.getInstance=function (name) {
    if(!this.instance){
        this.instance=new Singleton(name)

    }
    return this.instance
}

let obj1= Singleton.getInstance('hfh')
let obj2= Singleton.getInstance('qoi')
console.log(obj1==obj2);