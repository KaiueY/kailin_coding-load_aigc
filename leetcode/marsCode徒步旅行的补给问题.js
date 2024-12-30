/**
 * 问题描述:
 * 小R正在计划一次从地点A到地点B的徒步旅行，总路程需要 N 天。为了在旅途中保持充足的能量，小R每天必须消耗1份食物。
 * 幸运的是，小R在路途中每天都会经过一个补给站，可以先购买完食物后再消耗今天的1份食物。然而，每个补给站的食物每份的价格可能不同，
 * 并且小R在购买完食物后最多只能同时携带 K 份食物。
 * 
 * 现在，小R希望在保证每天食物消耗的前提下，以最小的花费完成这次徒步旅行。你能帮助小R计算出最低的花费是多少吗？
 * 
 * 输入:
 * @param {number} n - 总路程需要的天数
 * @param {number} k - 小R最多能同时携带食物的份数
 * @param {number[]} data - 第i天补给站每份食物的价格
 * 
 * 输出:
 * @returns {number} - 返回完成这次徒步旅行的最小花费
 * 
 * 约束条件:
 * 1 < n, k < 1000
 * 1 < data[i] < 10000
 * 
 * 测试样例:
 * 样例1:
 * 输入: n = 5, k = 2, data = [1, 2, 3, 3, 2]
 * 输出: 9
 */

function solution(n, k, data) {
    const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(Infinity));
    
    // 初始状态：第0天，携带0份食物，花费为0
    dp[0][0] = 0;
    
    // 遍历每一天
    for (let i = 0; i < n; i++) {
        // 遍历当前携带的食物数量
        for (let j = 0; j <= k; j++) {
            if (dp[i][j] === Infinity) continue;
            
            // 今天需要消耗一份食物，所以至少要有一份
            // 计算需要购买的食物数量，从0到k-j都可以尝试
            for (let buy = Math.max(0, 1 - j); buy <= k - j; buy++) {
                // 购买buy份食物后，明天会剩下 j + buy - 1 份
                // -1是因为今天消耗了一份
                const remain = j + buy - 1;
                if (remain >= 0) {
                    dp[i + 1][remain] = Math.min(
                        dp[i + 1][remain],
                        dp[i][j] + buy * data[i]
                    );
                }
            }
        }
    }
    
    // 返回最后一天所有可能携带食物数量的最小值
    return Math.min(...dp[n]);
}

function main() {
    // Add your test cases here
    console.log(solution(5, 2, [1, 2, 3, 3, 2]) === 9);
}

main();
