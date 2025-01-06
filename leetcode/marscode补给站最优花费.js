/**
 * 问题描述:
 * 小U计划进行一场从地点A到地点B的徒步旅行，旅行总共需要 M 天。为了在旅途中确保安全，小U每天都需要消耗一份食物。
 * 在路程中，小U会经过一些补给站，这些补给站分布在不同的天数上，且每个补给站的食物价格各不相同。
 * 
 * 小U需要在这些补给站中购买食物，以确保每天都有足够的食物。现在她想知道，如何规划在不同补给站的购买策略，
 * 以使她能够花费最少的钱顺利完成这次旅行。
 * 
 * 输入:
 * - M: 总路程所需的天数。
 * - N: 路上补给站的数量。
 * - p: 每个补给站的描述，包含两个数字 A 和 B，表示第 A 天有一个补给站，并且该站每份食物的价格为 B 元。
 * 
 * 保证第0天一定有一个补给站，并且补给站是按顺序出现的。
 * 
 * 测试样例:
 * 样例1：
 * 输入: m = 5, n = 4, p = [[0, 2], [1, 3], [2, 1], [3, 2]]
 * 输出: 7
 */

function solution(m, n, p) {
    // 初始化 DP 数组
    let prices = new Array(m).fill(Infinity);
    for (let i = 0; i < n; i++) {
        let day = p[i][0];
        let price = p[i][1];
        prices[day] = price;
    }

    // 动态规划数组，dp[i] 表示到第 i 天的最小花费
    let dp = new Array(m).fill(Infinity);
    dp[0] = 0;  // 第0天的花费为0

    // 从第0天到第m天，依次更新最小花费
    for (let i = 1; i < m; i++) {
        // 遍历之前的补给站
        for (let j = 0; j < i; j++) {
            if (prices[j] !== Infinity) { // 确保 j 天有补给站
                // 更新到第 i 天的最小花费
                dp[i] = Math.min(dp[i], dp[j] + prices[j] * (i - j));
            }
        }
    }

    // 返回第 m - 1 天的最小花费
    return dp[m - 1];
}

// 测试样例
console.log(solution(5, 4, [[0, 2], [1, 3], [2, 1], [3, 2]])); // 输出 7

function main() {
    // Add your test cases here
    console.log(solution(5, 4, [[0, 2], [1, 3], [2, 1], [3, 2]]) === 7);
}

main();