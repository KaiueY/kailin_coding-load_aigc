// var num =123
// num.a='abc'
// // 原始值不能拥有属性和方法 只有对象才能有
// console.log(num.a);

// Number() 
    // var num =new Number(123)//num是一个 数字对象
    // console.log(num*2);//246
    // num.a='a boy'
    // console.log(num.a);//a boy
    // console.log(num-1);122
    // console.log(num.a+' love a girl');//a boy love a girl

// var str='abc'
// console.log(str.length);


// // v8引擎执行操作
// var num =4 //1 相当于 new Number()

// num.len=3// 2 相当于 new Number().len =3
// //3 delete num.len
// console.log(num.len);//undefined

        // var obj ={}
        // obj.a=2
        // obj.b
        // console.log(obj);//{a: 2}
        // console.log(obj.b);//undefined
        // //不报错是因为引擎查询时发现只有键 b 而没有 值  因此就移除这个属性b
        // console.log(obj.c);//undefined  访问对象上不存在的属性就是 undefined

