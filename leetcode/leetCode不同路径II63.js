/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * https://leetcode.cn/problems/unique-paths-ii/
 * 可能不止一个障碍物
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
        let n = obstacleGrid[0].length
        // 如果起点或终点是障碍物，直接返回 0
        if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
            return 0;
        }
        obstacleGrid[0][0] = 1
        // 初始化第一行
        for (let j = 1; j < n; j++) {
            obstacleGrid[0][j] = obstacleGrid[0][j] === 0 && obstacleGrid[0][j - 1] === 1 ? 1 : 0;
    
    
        }
    
        // 初始化第一列
        for (let i = 1; i < m; i++) {
            obstacleGrid[i][0] = obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1 ? 1 : 0;
    
    
        }
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                obstacleGrid[i][j] = obstacleGrid[i][j] === 0 ? (obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]) : 0
            }
        }
    
        return obstacleGrid[m-1][n-1]
    };