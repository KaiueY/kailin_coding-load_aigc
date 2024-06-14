function fn(a) {
    console.log(a)//function a(){}
    var a = 123
    console.log(a) //123
    function a() { }
    console.log(a) //123
    var b = function () { }
    console.log(b)//function b() { }
    function d() { }
    var d = a//
    console.log(d)//123node 
}
// 创建函数的执行上下文对象 AO 
// 寻找形参和变量声明 将形参和变量名作为AO的属性 值为 undefined
// AO: {
//     a:undefined ->1->function a(){}-> 123
//     b:undefined, ->function b() { }
//     d:undefined,-> function d(){}->a=123
//     //在函数体内查找函数声明 将函数名作为AO的属性名  值赋予函数体
//     //会被覆盖
    
// }
fn(1)