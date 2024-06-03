var str = 'abc'
str += 1//str='abc1'
console.log(str);
var test = typeof (str) //'String'
if (test.length === 6) {//true
    test.sign = 'typeOf的返回结果可能是String' 
    //new String(test).sign='....'
    //but test不能有属性 -->delete test.len
}
console.log(test.aign)//undefined 
