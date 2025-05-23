// https://leetcode.cn/problems/maximal-square/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    let result = 0
    const dp = Array.from({length:m},(_,i)=>Array.from({length:n},(_,j)=>0))
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(matrix[i][j] === '1'){
                if(i === 0 || j === 0) {dp[i][j] = matrix[i][j]}
                else{

                    dp[i][j] = Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1]) + 1
                }
                result = Math.max(result,dp[i][j])
            }
        }
    }
    return result * result
   

};
let res = maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])
console.log(res);
