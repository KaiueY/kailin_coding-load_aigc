// https://leetcode.cn/problems/minimum-number-of-swaps-to-make-the-string-balanced//
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let cnt = 0, mincnt = 0;
    for (let ch of s) {
        if (ch === '[') {
            cnt += 1;
        } else {
            cnt -= 1;
            mincnt = Math.min(mincnt, cnt);
        }
    }
    return Math.floor((-mincnt + 1) / 2);
};