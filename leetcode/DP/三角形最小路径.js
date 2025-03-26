// https://leetcode.cn/problems/triangle/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;
    if (n === 0) return 0;
    // 初始化dp为最后一层的拷贝
    const dp = [...triangle[n - 1]];
    // 从倒数第二层向上遍历
    for (let i = n - 2; i >= 0; i--) {
        // 更新当前层的每个位置的最小路径和
        for (let j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    return dp[0];
};