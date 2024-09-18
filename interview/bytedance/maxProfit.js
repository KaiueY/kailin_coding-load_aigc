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
function maxProfit(price){
    let low = Infinity;//无限大
    let result = 0 
    for(let i = 0;i<price.length;i++){
        low = Math.min(low,price[i])
        result = Math.max(result,price[i]-low)
    }

    return result
    
}

