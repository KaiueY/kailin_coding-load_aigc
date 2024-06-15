// function foo (){
//     var a=1
//     console.log(this.a);
// }
// foo()//undefined
var obj = {
    a:3,
    b:function () {
        console.log(this.a);//函数在哪个词法作用域里生效，
    }
}
var a = 2
obj.b()