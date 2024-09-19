// // 暴力破解
// function maxProfit(prices) {
//     let maxProfit = 0;
//     for (let buy = 0; buy < prices.length; buy++) { // 遍历每一天作为买入日
//         for (let sell = buy + 1; sell < prices.length; sell++) { // 从买入日之后开始遍历作为卖出日
//             const profit = prices[sell] - prices[buy]; // 计算买入和卖出之间的利润
//             if (profit > maxProfit) { // 如果此次交易利润更高，则更新最大利润
//                 maxProfit = profit;
//             }
//         }
//     }
//     return maxProfit;
// }

// // 示例
// const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices)); // 输出应为 5 （在价格为1的时候买入，在价格为6的时候卖出）
// // 时间复杂度O(n^2)  空间复杂度 O(1)

// 贪心算法  局部最优解  只关心当下是否能拿到最大值
// 动态规划 可以完全相信前一个结果正确  最优子结构 局部和全局是一致的  状态转移方程


// 贪心 O(n)
// 在每个决策点都选择单签看起来的最优选择 不会积累最值
// function maxProfit(price){
//     let low = Infinity;//无限大
//     let result = 0 
//     for(let i = 0;i<price.length;i++){
//         low = Math.min(low,price[i])
//         result = Math.max(result,price[i]-low)
//     }
//     return result
// }


// 动态规划
// 贪心的每一步选择最低价，计算最大利润，动态规划更关注之前的计算
// dp[] 意义
// 初始化
// 状态转移方程
// 迭代
// 最值

function maxProfit(prices){
    let n = prices.length
    if(n==0) return 0

    // 初始化 dp中每一项都是当天的最值 第i天的最大利润
    let dp = new Array(n).fill(0)
    // 初始化 最低是0️⃣ 没有卖出机会
    let minPrice = prices[0]
    for(let i = 1;i<n;i++){
        // 观测出来 选择最大利润，相信前一项 比较当前减去最小价格
        dp[i] = Math.max(dp[i-1],prices[i]-minPrice)
        minPrice = Math.min(minPrice,prices[i])
    }
    return dp[i-1]

}
const prices = [7, 1, 5, 3, 6, 4];


// 自己写的贪心
function max(prices){
    let low = Infinity
    let len = prices.length
    let min = 0
    for(let i = 0;i<len;i++){
        low = Math.min(low,prices[i])
        min = Math.max(min,prices[i]-low)
    }
}
// 自己写的dp
function maxProfit(prices){
    let len = prices.length
    if(len ==1 ) return 0
    const dp = new Array(len).fill(0)
    let minBuy = prices[0]
    for(let i = 1 ;i<len ;i++){
        dp[i] = Math.max(dp[i-1],prices[i]- minBuy)
        minBuy = Math.min(minBuy,prices[i])
    }
}