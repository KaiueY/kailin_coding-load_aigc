// var a
// console.log(a)
// var a =1 
// console.log(a)// 1

// 声明提升 js可以先调用再声明
var a = 1
function foo(a) {
    var a = 2
    console.log(a);
    function a() {}
        console.log(a);
    
}
foo(3)