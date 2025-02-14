// https://leetcode.cn/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
*/
var generateMatrix = function (n) {
    const result = new Array(n).fill(0).map(() => new Array(n).fill(0));
let count = 1;
let row = 0, col = 0;
let loop = Math.floor(n / 2);
let offset = 1;
let i, j;
while (loop--) {
  i = row;
  j = col;
  // 上行
  for (j = col; j < n - offset; j++) {
    result[row][j] = count++;
  }
  // 右列
  for (i = row; i < n - offset; i++) {
    result[i][j] = count++;
  }
  // 下行
  for (; j > col; j--) {
    result[i][j] = count++;
  }
  // 左列
  for (; i > row; i--) {
    result[i][j] = count++;
  }
  row++;
  col++;
  offset++;
}
if (n % 2 === 1) {
  result[Math.floor(n / 2)][Math.floor(n / 2)] = count;
}
return result;
};


console.log(generateMatrix(3));
