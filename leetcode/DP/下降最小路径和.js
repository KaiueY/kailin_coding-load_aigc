// https://leetcode.cn/problems/minimum-falling-path-sum/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    // let result = Infinity
    // for(let i = 1;i<matrix.length;i++){
    //     for(let j = 0;j<matrix[0].length;j++){
    //         matrix[i][j] = Math.min(matrix[i-1][j],matrix[i-1][j-1],matrix[i-1][j+1]) + matrix[i][j]
    //         if(i === matrix.length-1){
    //             result = Math.min(result,matrix[i][j])
    //         }
    //     }
    // }
    // return result
    const n = matrix.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const left = j > 0 ? matrix[i - 1][j - 1] : Infinity;
            const up = matrix[i - 1][j];
            const right = j < n - 1 ? matrix[i - 1][j + 1] : Infinity;
            matrix[i][j] += Math.min(left, up, right);
        }
    }
    return Math.min(...matrix[n - 1]);
};