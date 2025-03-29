/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    if (n <= 1) return s;
    
    // 创建二维数组
    const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
    let start = 0, maxLength = 1;
    
    // 所有单个字符都是回文
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    
    // 检查长度为2的子串
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }
    
    // 检查长度大于2的子串
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (len > maxLength) {
                    start = i;
                    maxLength = len;
                }
            }
        }
    }
    
    return s.substring(start, start + maxLength);  
};