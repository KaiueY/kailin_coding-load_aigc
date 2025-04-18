// https://leetcode.cn/problems/count-number-of-bad-pairs/?envType=daily-question&envId=2025-04-18
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const n = nums.length;
    const frequency = {};
    for (let i = 0; i < n; i++) {
        const val = nums[i] - i;
        frequency[val] = (frequency[val] || 0) + 1;
    }
    
    let goodPairs = 0;
    for (const key in frequency) {
        const m = frequency[key];
        goodPairs += m * (m - 1) / 2;
    }
    
    const totalPairs = n * (n - 1) / 2;
    return totalPairs - goodPairs;
};