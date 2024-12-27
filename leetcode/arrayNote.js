// const arr=new Array(7)
// console.log(arr.length,arr);//7   [ <7 empty items> ]
// const arr2=new Array(7).fill(0)
// console.log(arr2);//[0, 0, 0, 0, 0, 0, 0]


const arr = [1, 2, 3, 4, 5, 6, 0]
const arr2 = [7, 8, 9]
// for (let i = 0, len = arr.length; i <len; i++) {
//     if (arr[i] > 2) {
//         // return //1 2   终止执行
//         // continue//1 2 0   跳过此次循环
//         break//1 2    跳过所有循环
//     }
//     console.log(arr[i]);
// }


// arr.forEach(function (item, index, arr) {
//     if(item>2){
//         return
//     }
//     console.log(arr[index]);//1 2 0  有0说明 return 没有终止代码执行
// })

// arr.forEach(function(item,index,arr){
//     console.log(item,index,arr);
// })

// const arr3=arr.map(function(item,index,arr){
//     return item*2
// })
// console.log(arr);//[1,2,3,4,5,6,0]
// console.log(arr3);//[2,4,6,8,10,12,0]
// //map和foreach相似  但必须有返回值
const array=[
    [1,2,3,4],
    [10,20,30,40],
    [11,22,33,44],
    [100,200,300,400],
]
