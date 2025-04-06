// https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let left = 0
    let right = 1
    let res = 0
    const len = nums.length
    while(len - left >= res && right < len){
        if(nums[right] <= nums[right-1]){
            res = Math.max(res, right - left)
            left = right
        }
        right++

    }
    return Math.max(res, right - left)
};