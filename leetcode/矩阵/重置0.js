/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
let firstRowZero = false, firstColZero = false;

// 检查第一列是否有0
for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
        firstColZero = true;
        break;
    }
}

// 检查第一行是否有0
for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
        firstRowZero = true;
        break;
    }
}

// 用第一行和第一列存储要置零的信息
for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
            matrix[i][0] = 0; // 标记该行
            matrix[0][j] = 0; // 标记该列
        }
    }
}

// 置零（根据第一行和第一列的标记）
for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = 0;
        }
    }
}

for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
        for (let i = 1; i < m; i++) {
            matrix[i][j] = 0;
        }
    }
}

// 处理第一行和第一列
if (firstRowZero) {
    for (let j = 0; j < n; j++) {
        matrix[0][j] = 0;
    }
}

if (firstColZero) {
    for (let i = 0; i < m; i++) {
        matrix[i][0] = 0;
    }
}
};