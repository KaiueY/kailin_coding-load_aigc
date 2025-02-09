// https://leetcode.cn/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
    let left = 0;

    for (let right = 0; right < len; right++) {
        if (nums[right] !== 0) {
            if (left !== right) {
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
            }
            left++; 
        }
    }
};