var str = 'hello'// new String() 

function Car(color) {
    //new
    // var this = {
    //     this: 'su7',
    //     this: 1400,
    //     this: 1000,
    //     this: 'red'

    // }
    // return this

    this.name = 'su7'
    this.height = 1400
    this.weight = 1000
    this.color = 'red'

}
let car1 = new Car('blue')
let car2 = new Car('green')
console.log(car2);
var obj = {}//创建对象字面量
