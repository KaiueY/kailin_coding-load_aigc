
let obj = {

}
let obj2 = {

    getName: function () {
        console.log(this.name);
    }
}
let obj3 = {

}
let obj4 = {
    name: 'kai',
}
obj2.__proto__ = obj4
obj3.__proto__ = obj2
obj3.getName()
// console.log();
obj3.__proto__ = obj
console.log(obj3.name);
