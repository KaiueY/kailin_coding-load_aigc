// 箭头函数

// var baz = () => {
//     console.log(this.a);
// }
// var obj = {
//     a: 1,
//     baz: baz
// }
// obj.baz()//undefined

var obj ={
    a:1,
    foo:function (){
        const fn=()=>{
            console.log(this.a);
        }
        fn()
    }
}
obj.foo()//1