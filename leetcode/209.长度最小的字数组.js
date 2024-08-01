/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
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

