// https://leetcode.cn/problems/wiggle-subsequence/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const len = nums.length;
    if (len < 2) {
        return len;
    }
    let prediff = nums[1] - nums[0];
    let res = prediff !== 0 ? 2 : 1;
    for (let i = 2; i < len; i++) {
        const diff = nums[i] - nums[i - 1];
        if ((diff > 0 && prediff <= 0) || (diff < 0 && prediff >= 0)) {
            res++;
            prediff = diff;
        }
    }
    return res;
};
