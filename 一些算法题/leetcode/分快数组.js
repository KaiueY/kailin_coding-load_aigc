/**
 * 2677. 分块数组
 * 简单
 * 相关企业
 * @description 给定一个数组 arr 和一个块大小 size ，返回一个 分块 的数组。
 *              分块 的数组包含了 arr 中的原始元素，但是每个子数组的长度都是 size。
 *              如果 arr.length 不能被 size 整除，那么最后一个子数组的长度可能小于 size。
 *              你可以假设该数组是 JSON.parse 的输出结果。换句话说，它是有效的JSON。
 *              请你在不使用 lodash 的函数 _.chunk 的情况下解决这个问题。
 */

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function(arr, size) {
//     const result = []
//     const len = arr.length - 1
//     let index = 0
//     for(let i = 0;i<len;i++){
//         if(i%size===0){
//             result.push(arr.slice(index,index+size))
//             index=i+size
//         }
//         if(i+size>len){
//             result.push(arr.slice(index))
//         }
//     }
//     return result
// };
var chunk = function(arr, size) {
    const result = [];
    let index = 0;
    
    // 使用 while 循环，每次处理一个子数组
    while (index < arr.length) {
        result.push(arr.slice(index, index + size)); // 将子数组推入结果
        index += size; // 更新索引
    }
    
    return result;
};