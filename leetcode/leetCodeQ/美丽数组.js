// https://leetcode.cn/problems/count-the-number-of-beautiful-subarrays/?envType=daily-question&envId=2025-03-06
/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
    const n = nums.length;
let prefixXor = 0;
let count = 0;
const xorCount = new Map();
xorCount.set(0, 1); // 初始状态，前缀异或为0的情况出现了一次

for (let i = 0; i < n; i++) {
    prefixXor ^= nums[i];
    if (xorCount.has(prefixXor)) {
        count += xorCount.get(prefixXor);
        xorCount.set(prefixXor, xorCount.get(prefixXor) + 1);
    } else {
        xorCount.set(prefixXor, 1);
    }
}

return count;
};