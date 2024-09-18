// 惰性函数
// 便携一个foo函数 返回首次调用的Data对象
// function foo() {
//     let date
//     return function () {
//         if (!date) {
//             date = new Date()
//         }
//             return date
//     }
// }

// var foo = (function (){
//     var t 
//     return function(){
//         if(t){
//             return t
//         }
//         t= new Date()
//         return t
//     }
// })()

// function foo (){
//     if(foo.t){
//         return foo.t
//         foo.t = new Date()
//         return foo.t
//     }
// }


// 惰性函数  重写函数
var foo = function(){
    var t = new Date()
    foo = function(){
        return t
    }
    return foo()
}


const baz = foo()
const baz2 = foo()
console.log(baz,baz2);


// 使用示例
// const getDate = foo();
// console.log(getDate()); // 第一次调用，创建并返回 Date 对象
// console.log(getDate()); // 第二次调用，直接返回之前的 Date 对象