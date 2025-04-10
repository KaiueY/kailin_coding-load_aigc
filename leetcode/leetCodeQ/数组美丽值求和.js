// https://leetcode.cn/problems/sum-of-beauty-in-the-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    const n = nums.length;
    const state = new Array(n).fill(0);
    let pre_max = nums[0];
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > pre_max) {
            state[i] = 1;
            pre_max = nums[i];
        }
    }
    let suf_min = nums[n - 1];
    let res = 0;
    for (let i = n - 2; i > 0; i--) {
        if (state[i] && nums[i] < suf_min) {
            res += 2;
        } else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
            res += 1;
        }
        suf_min = Math.min(suf_min, nums[i]);
    }
    return res;

};