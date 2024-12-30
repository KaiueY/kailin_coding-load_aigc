/**
 * @param {number[]} cost
 * @return {number}
 * https://leetcode.cn/problems/min-cost-climbing-stairs/
 */
var minCostClimbingStairs = function(cost) {
    const dp = []
    // dp[i] 到达某一个台阶目前所最小花费
    dp[0] = 0
    dp[1] = 0
    const len = cost.length
    for(let i = 2;i<=len ;i++){
        dp[i]= Math.min(cost[i-1]+dp[i-1],cost[i-2]+dp[i-2])
    }  
    return dp[len]
    console.log(dp);
};
minCostClimbingStairs([10,15,20])