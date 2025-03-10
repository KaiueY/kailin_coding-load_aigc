// https://leetcode.cn/problems/game-of-life/
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length, n = board[0].length;
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],  // 上三格
        [0, -1],         [0, 1],  // 左右
        [1, -1], [1, 0], [1, 1]   // 下三格
    ];

    // 计算某个细胞的活邻居数
    const countLiveNeighbors = (r, c) => {
        let liveCount = 0;
        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && (board[nr][nc] === 1 || board[nr][nc] === 2)) {
                liveCount++;
            }
        }
        return liveCount;
    };

    // 遍历 board 并标记状态
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let liveNeighbors = countLiveNeighbors(i, j);
            
            if (board[i][j] === 1) {  // 当前是活细胞
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[i][j] = 2; // 1 -> 0 (死)
                }
            } else { // 当前是死细胞
                if (liveNeighbors === 3) {
                    board[i][j] = 3; // 0 -> 1 (活)
                }
            }
        }
    }

    // 还原 board 状态
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 2) board[i][j] = 0; // 2 → 0
            if (board[i][j] === 3) board[i][j] = 1; // 3 → 1
        }
    }
};