let obj={
    a:1,
    b:{n:2}
}
let objj={
    a:1,
    b:{n:2},
    c:'ccc',
    d:true,
    e:null,
    f:undefined,
    g:[1,2,3],
    h:function(){},
    i:Symbol(1)
}
// let s=JSON.stringify(obj)//{"a":1,"b":{"n":2}}  将对象转换成JSON格式的字符串

// let obj2=JSON.parse(s)//{ a: 1, b: { n: 2 } } 将JSON格式的字符串转换成对象
// obj.b.n=10
// console.log(obj2);//{ a: 1, b: { n: 2 } }  修改了引用类型的b 也没有改变obj2 


let newObj=JSON.parse(JSON.stringify(objj))
console.log(newObj);