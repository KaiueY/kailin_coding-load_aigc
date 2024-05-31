// 数组对象.tostring（） 
// console.log(typeof [1,[2,[3,4,[5,[6]]]]].toString());// 1,2,3,4,5,6 字符串类型

var arr =[1,[2,[3,4,[5,[6]]]]]
function flatten(arr) {
    var strArr= arr.toString()//以逗号隔开的字符串
    var numArr=strArr.split(',')
    var result=[]
    for (let i  = 0,length=numArr.length; i  < length; i ++) {
        // 强制类型转换 Number（）、 parseInt（）、+
        result.push( +numArr[i])
        
    }
    console.log(result);
    // return 
}
flatten( arr)