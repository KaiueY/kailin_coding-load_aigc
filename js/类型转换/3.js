if({}){
    console.log('ok');
}//括号内的值会被转换成布尔类型 隐式转换


Number({})
// 1. ToNumber({})
// 2. let primValue =Toprimitive({},Number) 
//      调用valueOf（）得到{}
//      调用toString（）得到'[object Object]'  说明调用的是object的toString方法
//      调用ToNumber('[object Object]')得到NaN   
//  3. 返回NaN
console.log(Number({}));//NaN


console.log(Number([]))//0
//1. ToNumber([])
//2.toNumber调用ToPrimitive([],Number) 得到空字符串''
// ToNumber('') 得到0

// 对象转字符串String
console.log(String({}));

// ToString({})
//ToPrimitive({},String)//得到"[object Object]"
// ToString("[object Object]")//返回结果