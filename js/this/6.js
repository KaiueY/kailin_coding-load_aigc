var obj={
    a:1
}
function foo(x,y){
    console.log(this.a,x+y);
}
foo.call(obj,1,8)//1 9  call会把foo中的this绑定到obj中,会调用foo构造方法
foo.apply(obj,[1,5])//1 6  apply 以数组格式接收参数
const bar  = foo.bind(obj,4,6) 
bar()//1 10  以零散方式传递参数  和call一样  返回一个对象  参数也可放在bar中  可分开