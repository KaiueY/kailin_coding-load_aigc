// https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let res = -Infinity
    const len = nums.length
    if(len === 1) return len
    for(let i = 0; i < nums.length; i++) {
        let count = 1
        while(nums[i] < nums[i+1]) {
            count++
            i++
        }
        res = Math.max(res, count)   

    }
    return res
};