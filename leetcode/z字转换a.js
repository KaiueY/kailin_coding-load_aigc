/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * @param {string} s - 给定的字符串
 * @param {number} numRows - 指定的行数
 * @returns {string} - 变换后的字符串
 * 
 * 示例 1：
 * 输入：s = "PAYPALISHIRING", numRows = 3
 * 输出："PAHNAPLSIIGYIR"
 * 
 * 示例 2：
 * 输入：s = "PAYPALISHIRING", numRows = 4
 * 输出："PINALSIGYAHRPI"
 * 解释：
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s; // 边界情况，直接返回原字符串
    }

    const rows = Array.from({ length: numRows }, () => []); // 创建 numRows 个空数组
    let currentRow = 0; // 当前行索引
    let down = true; // 控制方向

    // 遍历字符串
    for (const char of s) {
        rows[currentRow].push(char); // 将字符加入对应行
        // 改变方向
        if (currentRow === 0) down = true; // 到达顶部，开始向下
        else if (currentRow === numRows - 1) down = false; // 到达底部，开始向上

        currentRow += down ? 1 : -1; // 根据方向改变行索引
    }

    // 将所有行拼接成最终字符串
    return rows.map(row => row.join("")).join("");
};