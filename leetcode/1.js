
// 1. 两数之和
// 提示
// 给定一个整数数组 nums 和一个整数目标值 target，
// 请你在该数组中找出和为目标值target的那两个整数,并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]
 
// 提示：
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// 只会存在一个有效答案
 
// 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//方法一：暴力

// var twoSum = function(nums,target){
//     for(var i = 0;i<nums.length-1;i++)
//         for(var j=i+1;j<nums.length;j++){
//             if (nums[i]+nums[j]==target)
//                 return[i,j]
//         }
// }



//方法二:哈希表
var twoSum = function(nums, target) {
    const len = nums.length;
    // 1.创建一个对象存储目标值的下标
    const obj = {}
    // 遍历数组，找到target-nums[i]的值 
    for(let i = 0;i<len; i++){
        let curNum = nums[i]
        let tarNum = target - curNum
        if(obj[tarNum] !== undefined){
            // 如果存在，返回下标
            return [obj[tarNum],i]
        }else {
            // 如果不存在，将nums[i]的值作为key，下标作为value存储到对象中
            obj[curNum] = i
        }
    }
    return -1
};


// //双指针
// // 创建一个新的数组来存储原数组的下标
// var twoSum = function(nums, target) {
// const indexArray = [];
// for (let i = 0; i < nums.length; i++) {
//     indexArray.push(i);
// }

// // 根据原数组 nums 的值对 indexArray 进行排序
// indexArray.sort((a, b) => nums[a] - nums[b]);

// // 使用双指针解决问题
// let left = 0;
// let right = nums.length - 1;
// while (left < right) {
//     const sum = nums[indexArray[left]] + nums[indexArray[right]];
//     if (sum === target) {
//         return [indexArray[left], indexArray[right]];
//     } else if (sum < target) {
//         left++;
//     } else {
//         right--;
//     }
// }

// // 如果没有找到满足条件的两个数，返回空数组
// return [];
// };

var nums = [2,7,11,15], target = 9
console.log(twoSum(nums,target));

