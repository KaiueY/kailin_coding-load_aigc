function add (a,b){
    return a + b;
}
module.exports = add;//抛出的是add函数
// module.exports = {
//     add,
// }//抛出的是一个对象，对象里面有add函数

exports.hello = 'world';//抛出的是一个对象，对象里面有hello属性