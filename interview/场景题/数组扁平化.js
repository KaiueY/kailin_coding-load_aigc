const arr = [1, [2, [3, [4]]]]

// 1.内置
// console.log(arr.flat(Infinity)) // [ 1, 2, 3, 4 ];
// 2. toString()
// console.log(arr.toString().split(',').map(item => +item)) // [ 1, 2, 3, 4 ];
// 3.递归
// function flatArr(arr) {
//     let res = []
//     for (let item of arr) {
//         if (!Array.isArray(item)) {
//             res.push(item)
//         }else{
//          res = res.concat(flatArr(item))   
//         }
//     }
//     return res
// }
// console.log(flatArr(arr)) // [ 1, 2, 3, 4 ];

    
