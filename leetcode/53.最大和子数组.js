// 53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。
// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
/**
 * @param {number[]} nums
 * @return {number}
 */

// 从第一个开始，将最大值maxSum和当前和currentSum记为numss[0],
// 每遍历一个数，都进行加运算，
// 看是否变大了（当前和为变大后的值）或者变小了（当前和为nums[i]，从nums[i]开始重新计算）
// 并和最大值进行比较取最大值。
// 如此直到最后一个元素。
var maxSubArray = function (nums) {
    if (nums.length === 0) return 0;

    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 