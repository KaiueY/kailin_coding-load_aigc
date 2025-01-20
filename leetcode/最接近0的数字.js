// https://leetcode.cn/problems/find-closest-number-to-zero/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let result = nums[0]; // Initialize with the first element

    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(result)) {
            result = nums[i]; // Update result if nums[i] is closer to zero
        } else if (Math.abs(nums[i]) === Math.abs(result)) {
            result = Math.max(result, nums[i]); // Choose the positive number in case of a tie
        }
    }

    return result;
};