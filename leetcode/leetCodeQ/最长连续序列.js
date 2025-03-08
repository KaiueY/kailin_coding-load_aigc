// https://leetcode.cn/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let maxLen = -Infinity
    let currentLen = 1
     for(const num of set) {
        if(!set.has(num-1)){
            let currentNum = num
            let currentLen = 1
            while(set.has(currentNum+1)){
                currentLen++
                currentNum++
            }
        }
        maxLen = Math.max(maxLen, currentLen)
    }
    return maxLen
};