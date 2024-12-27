/**
 * 问题描述
 * 小M的任务是调整一只股票的价格，使其符合一个给定的正整数序列
 * p0, p1, …, pn−1，并且要确保每个月的股票上涨系数不能超过某个百分比k。
 * 上涨系数定义为当月价格相对于之前所有月份价格总和的比例。如果上涨系数超过k%，
 * 就需要对某些月份的价格进行调整，以尽量减少对整体序列的变更。
 *
 * 你需要输出在保证上涨系数不超过k%的情况下，最少需要增加的价格总和。
 */

function solution(n, k, p) {
  let totalIncrease = 0;
  let cumulativeSum = 0;

  for (let i = 0; i < n; i++) {
    if (i > 0 && p[i] / cumulativeSum > k / 100) {
      // Calculate the minimum increase needed to satisfy the condition
      let requiredIncrease = Math.ceil((p[i] * 100) / k - cumulativeSum);
      totalIncrease += requiredIncrease;
      cumulativeSum += requiredIncrease;
    }
    cumulativeSum += p[i];
  }

  return totalIncrease;
}

function main() {
  console.log(solution(5, 12, [1000, 34, 12, 27, 131]) === 19);
  console.log(solution(4, 10, [100, 1, 1, 1]) === 0);
  console.log(solution(6, 15, [500, 50, 30, 20, 10, 60]) === 0);
}

main();
