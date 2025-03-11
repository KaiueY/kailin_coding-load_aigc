https://leetcode.cn/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 先找到可能包含目标值的行
    let left = 0;
    let right = matrix.length - 1;
    let row = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[mid][0] > target) {
            right = mid - 1;
        } else if (mid + 1 === matrix.length || matrix[mid + 1][0] > target) {
            row = mid;
            break;
        } else {
            left = mid + 1;
        }
    }
    
    if (row === -1) return false;
    
    // 在找到的行中二分查找目标值
    left = 0;
    right = matrix[0].length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[row][mid] === target) {
            return true;
        } else if (matrix[row][mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return false;
};

// 一次二分查找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix[0]) return false;
    
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        const value = matrix[row][col];
        
        if (value === target) {
            return true;
        } else if (value > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return false;
};  