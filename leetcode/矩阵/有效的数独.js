// https://leetcode.cn/problems/valid-sudoku/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 初始化三个二维数组，用于记录行、列、3x3宫中的数字是否出现过
    const rows = new Array(9).fill(0).map(() => new Set());
    const cols = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue; // 跳过空白格

            // 检查行
            if (rows[i].has(num)) return false;
            rows[i].add(num);

            // 检查列
            if (cols[j].has(num)) return false;
            cols[j].add(num);

            // 检查 3x3 宫
             // 计算当前格子所在的 3x3 宫索引
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex].has(num)) return false;
            boxes[boxIndex].add(num);
        }
    }
    return true;
};