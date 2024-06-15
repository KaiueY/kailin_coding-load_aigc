// var a=2
// function foo (){
//     var a = 1 
//     function bar(){
//         console.log(this.a);
//     }
//     bar()  //在foo作用域里生效 在全局词法作用域（foo的词法作用域（foo声明的地方））生效。
// }
// foo()//undefined
var a =1
function foo() {
    var a=2
    function bar(){
        var a =3 
        function  baz(){
            console.log(this.a);
        }
        baz()//在bar的作用域里生效
    }
    bar()//在foo的作用域里生效   
}
foo()