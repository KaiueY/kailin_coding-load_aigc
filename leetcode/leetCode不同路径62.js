/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/unique-paths/description/
 */
var uniquePaths = function(m, n) {
    const dp = Array.from({ length: m }, (_, i) =>
        Array.from({ length: n }, (_, j) => (i === 0 || j === 0 ? 1 : 0))
    );
    
    for(let i = 1;i<m;i++){
        for(let j = 1;j<n;j++){
            dp[i][j] = dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
    
    
};
uniquePaths(3,3)