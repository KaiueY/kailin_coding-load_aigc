/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/climbing-stairs/description/
 */
var climbStairs = function(n) {
    // dp[i]达到第i阶有dp[i]种方法
    const dp = []
    dp[1] = 1
    dp[2] = 2
    if(n<3) return dp[n]
    for(let i = 3;i<=n;i++){
        dp[i] = dp[i-2] + dp[i-1]
    }
    return dp[n]

};