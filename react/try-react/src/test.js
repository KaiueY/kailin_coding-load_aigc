// console.log('test一下');
// es6模块化 add.js 返回 add 方法
// add.js 会返回多个方法，只需要add方法
import  Add,{ add } from './add.js';//Add是默认导出的取名为Add，add是具名导出的


console.log(Add);
console.log(add(1, 2));