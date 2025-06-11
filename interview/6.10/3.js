/**
 * 
 * @param {*} num 
 * @returns 
 * 你选择掷出 num（1 <= num <= 11）个色子，请返回所有点数总和的概率。
你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 num 个骰子所能掷出的点数集合中第 i 小的那个的概率。

示例 1：

输入：num = 3
输出：[0.00463,0.01389,0.02778,0.04630,0.06944,0.09722,0.11574,0.12500,0.12500,0.11574,0.09722,0.06944,0.04630,0.02778,0.01389,0.00463]
示例 2：

 */

function dicesProbability(num) {
    // 初始化二维数组 dp[num+1][6*num+1]，使用 Map 更节省空间
    let dp = new Array(num + 1).fill(0).map(() => ({}));
  
    // base case：1 个骰子的点数为 1~6
    for (let i = 1; i <= 6; i++) {
      dp[1][i] = 1;
    }
  
    // 状态转移
    for (let i = 2; i <= num; i++) {
      for (let j = i; j <= 6 * i; j++) {
        dp[i][j] = 0;
        for (let k = 1; k <= 6; k++) {
          if (dp[i - 1][j - k] !== undefined) {
            dp[i][j] += dp[i - 1][j - k];
          }
        }
      }
    }
  
    const total = Math.pow(6, num);
    const result = [];
    for (let i = num; i <= 6 * num; i++) {
      result.push(parseFloat((dp[num][i] / total).toFixed(5)));
    }
      return result;
  }
  
  // 示例
  console.log(dicesProbability(3));
  console.log(dicesProbability(5));