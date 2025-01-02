// 给定一个包含 n 个正整数的数组和一个正整数目标值，
// 找出该数组中满足其和 ≥ 目标值的最小长度的连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]。
// 如果不存在这样的子数组，返回 0。
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let minLength = Infinity
    let sum = nums[0] 
    let left = 0
    let right = 0
    while(right<nums.length){
        if(sum>= target){
            minLength = Math.min(minLength,right-left+1)
            sum -= nums[left]
            left++
            
        }else{
            right++
            sum += nums[right]
        }
    }
    return minLength === Infinity ? 0 :minLength
};