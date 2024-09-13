function Person(name) {
    this.name = name;

    this.sayName = function () {
        console.log('普通函数：', this.name);
    };

    this.sayNameArrow = () => {
        console.log('箭头函数：', this.name);
    };
}

const person = new Person('Alice');

const sayNameFunc = person.sayName;
const sayNameArrowFunc = person.sayNameArrow;
person.sayName();              // 普通函数：Alice
person.sayNameArrow();         // 箭头函数：Alice
person.sayNameFunc();         // 普通函数：undefined
person.sayNameArrowFunc();    // 箭头函数：Alice
