var arr = [1, 2, 3, 6, 5, 6]
// arr.forEach(function (item, index, arr) {
//    回调函数
//     console.log(item, index, arr)//索引、下标、数组
//     arr[index] = item + 1
//     console.log(item, index, arr)
// })

// var newArr = arr.map(function(item,index,arr){
//     return item*10
// })
var i=arr.indexOf(6)//返回第一个6的下标
var m=arr.lastIndexOf(6) //返回最后一个6的下标
var flag=arr.includes(6)    //判断数组中是否有6
console.log(arr); 
console.log(i);
console.log(m); 
console.log(flag);