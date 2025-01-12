// https://leetcode.cn/problems/largest-combination-with-bitwise-and-greater-than-zero/
/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let maxLen = 0;
    // 遍历32位（JS中数字是32位整数）
    for (let i = 0; i < 32; i++) {
        let count = 0;
        for (const num of candidates) {
            if ((num >> i) & 1) {
                count++;
            }
        }
        maxLen = Math.max(maxLen, count);
    }
    return maxLen;
};
