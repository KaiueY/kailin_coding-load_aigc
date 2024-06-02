function Person(name, num) {
    this.name='kobe'
    this.num=24
    this.name = name;
    this.num = num;
    console.log(typeof Person);
}
Person.prototype.shoot = function () {

}
console.log(typeof (new Person()));
let shooter = new Person('curry', 30)
console.log(shooter.name);
console.log(shooter);

首先 要不要参数呢
outNew(Fun,...args){
    let obj = Object.create(Fun);
    Fun.apply(obj,args)
    return obj
}