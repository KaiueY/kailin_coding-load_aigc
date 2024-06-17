var obj ={
    a:1
}
function foo(){
    console.log(this.a);
}
foo.call(obj)//1


Function.prototype.mycall = function(){
    const context = arguments[0]
    const args=Array.from(arguments).slice(1)//
    //拿到foo
    context.fn=this
    // 将foo引用到obj上
    // 让obj触发foo
    const res   = context.fn(...args)//接受参数
    // 移除掉obj身上的foo
    delete context.fn()
    return res
}
console.log(foo.mycall(obj)); //1