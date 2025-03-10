/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/fibonacci-number/
 */
var fib = function(n) {
    const dp = []
    dp[0] = 0
    dp[1] = 1
    for(let i = 2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};