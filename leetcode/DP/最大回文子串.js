// https://leetcode.cn/problems/longest-palindromic-substring/
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

/**
 * @param {string} s
 * @return {string}
 * 中心扩散
 */
var longestPalindrome = function(s) {
    if (s.length < 1) return "";
    
    let start = 0, end = 0; // 记录回文的起始和结束索引
    
    const expandAroundCenter = (str, left, right) => {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return right - left - 1; // 返回回文长度
    };
    
    for (let i = 0; i < s.length; i++) {
        // 必须同时检查奇数和偶数情况，不能有条件判断
        const len1 = expandAroundCenter(s, i, i);    // 奇数长度
        const len2 = expandAroundCenter(s, i, i + 1); // 偶数长度
        const len = Math.max(len1, len2);
        
        // 只有当找到更长的回文时才更新位置
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return s.substring(start, end + 1);
};