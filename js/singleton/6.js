/**
 * 模拟 new 操作符的行为，创建一个构造函数的实例
 * @param {Function} Constructor - 要实例化的构造函数
 * @param  {...any} args - 传递给构造函数的参数
 * @returns {Object} - 返回构造函数的实例
 */
function instantiate(Constructor, ...args) {
    // 1. 检查第一个参数是否是函数
    if (typeof Constructor !== 'function') {
      throw new Error('第一个参数必须是构造函数');
    }
  
    // 2. 创建一个新的空对象
    const instance = {};
  
    // 3. 将新对象的原型设置为构造函数的原型
    // 这样新对象可以访问构造函数原型链上的属性和方法
    instance.__proto__ = Object.create(Constructor.prototype);
  
    // 4. 调用构造函数，并将 this 绑定到新创建的对象上
    const result = Constructor.apply(instance, args);
  
    // 5. 如果构造函数返回的是对象或函数，则返回该结果
    // 否则返回新创建的对象
    const isObject = typeof result === 'object' && result !== null;
    const isFunction = typeof result === 'function';
    return isObject || isFunction ? result : instance;
  }
  
  // 测试用的构造函数
  function Person(name) {
    this.name = name;
  
    // 返回一个函数用于测试
    return function() { // 用来测试第 5 点
      console.log('返回引用数据类型');
    };
  }
  
  // 在构造函数的原型上添加一个方法
  Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
  }
  
  // 创建一个 Person 实例
  const me = instantiate(Person, 'Alice'); // 用来测试第 4 点
  
  // 调用实例方法
  me.sayName(); // My name is Alice
  
  // 输出实例对象
  console.log(me); // Person {name: 'Alice'}
  
  // 用来测试第 1 点
  // const invalidInstance = instantiate({ name: 'Alice' }, 'Alice'); // 报错：第一个参数必须是构造函数
  