// https://leetcode.cn/problems/minimum-operations-to-exceed-threshold-value-i/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let result = 0
    nums.forEach((val)=>{
        if(val<k){
            result++
        }
    })
    return result
};