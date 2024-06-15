// var obj = {
//     a:1,
//     foo:foo()

// }
function foo (){
    console.log(this.a);

}
// obj.foo//1
var obj ={
    a:1,
    foo:foo
}
obj2={
    a:2,
    obj:obj
}
obj2.obj.foo()//1