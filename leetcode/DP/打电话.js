// https://leetcode.cn/problems/count-number-of-texts/
/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
    const MOD = 10**9 + 7;
    const n = pressedKeys.length;
    if (n === 0) return 1;
    if (pressedKeys.includes('0') || pressedKeys.includes('1')) return 0;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1]; // 单个按键
        if (pressedKeys[i - 1] === pressedKeys[i - 2]) {
            dp[i] = (dp[i] + dp[i - 2]) % MOD;
            if (i >= 3 && pressedKeys[i - 1] === pressedKeys[i - 3]) {
                dp[i] = (dp[i] + dp[i - 3]) % MOD;
                if (i >= 4 && pressedKeys[i - 1] === pressedKeys[i - 4] && ['7', '9'].includes(pressedKeys[i - 1])) {
                    dp[i] = (dp[i] + dp[i - 4]) % MOD;
                }
            }
        }
    }

    return dp[n];
};