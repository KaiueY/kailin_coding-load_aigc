/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target，
 * 找出该数组中满足其总和大于等于 target 的长度最小的
 * 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0。
 *
 * @param {number} target - 需要达到的目标和。
 * @param {number[]} nums - 正整数数组。
 * @returns {number} 满足条件的最小子数组长度，如果不存在则返回 0。
 *
 * @example
 * // 示例 1:
 * // 输入: target = 7, nums = [2,3,1,2,4,3]
 * // 输出: 2
 * // 解释: 子数组 [4, 3] 是该条件下的长度最小的子数组。
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
    const len = nums.length;
    let sum = 0, minLen = Infinity;
    for (let i = 0, j = 0; j < len; j++) {
        sum += nums[j];
        while (sum >= target) {
            let min = j - i + 1;
            minLen = Math.min(minLen, min);
            sum -= nums[i++];
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

