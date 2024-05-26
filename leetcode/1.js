
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
    // 创建一个空对象 numIndexMap，用来存储数组中每个数字对应的索引
    const numIndexMap = {};
    // 遍历数组 nums
    for (let i = 0; i < nums.length; i++) {
        // 计算目标值与当前元素的差值
        const complement = target - nums[i];
        // 如果差值在 numIndexMap 中存在（即之前已经遍历过的数字中存在与差值相等的数字）
        if (numIndexMap.hasOwnProperty(complement)) {
            // 返回两个数的索引，其中一个是之前已经存入 numIndexMap 中的索引，另一个是当前遍历到的索引 i
            return [numIndexMap[complement], i];
        }
        // 将当前遍历到的数字存入 numIndexMap 中，键为当前数字，值为当前数字的索引 i
        numIndexMap[nums[i]] = i;
    }
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

