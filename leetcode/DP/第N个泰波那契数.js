// https://leetcode.cn/problems/n-th-tribonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    // 1 定义dp数组 初始化
    const dp = new Array(n + 1).fill(0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    // 2 确定递推公式
    for(let i = 3;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }
    console.log(dp);
    
    return dp[n]
};
console.log(tribonacci(4));
