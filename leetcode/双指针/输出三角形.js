/**
 * 
 * @param {number} num 
 */

// 方法 1：基础循环拼接（最直观）

function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
        let left = [];
        for (let j = i; j >= 1; j--) left.push(j);
        let right = [];
        for (let j = 2; j <= i; j++) right.push(j);
        let row = [...left, ...right].join(' ');
        console.log(' '.repeat(num - i) + row + ' '.repeat(num - i));
    }
}
printTriangle(5);
// 思路：
// 分别生成左半部分（递减）和右半部分（递增），合并后用 join(' ') 拼接成字符串。
// 用 ' '.repeat(num - i) 计算空格使行居中。

// 方法 2：使用 Array.from() 生成数字序列

function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
        const left = Array.from({ length: i }, (_, j) => i - j);
        const right = Array.from({ length: i - 1 }, (_, j) => j + 2);
        const row = [...left, ...right].join(' ');
        console.log(' '.repeat(num - i) + row + ' '.repeat(num - i));
    }
}
printTriangle(5);
// 思路：
// 用 Array.from() 生成左半部分 [i, i-1, ..., 1] 和右半部分 [2, 3, ..., i]。
// 合并后拼接成字符串，并用空格居中。

// 方法 3：递归生成每行

function printTriangle(num, current = 1) {
    if (current > num) return;
    const left = Array.from({ length: current }, (_, j) => current - j);
    const right = Array.from({ length: current - 1 }, (_, j) => j + 2);
    const row = [...left, ...right].join(' ');
    console.log(' '.repeat(num - current) + row + ' '.repeat(num - current));
    printTriangle(num, current + 1);
}
printTriangle(5);
// 思路：
// 使用递归代替 for 循环，每次调用 current + 1 直到 current > num。
// 其余逻辑与方法 2 相同。

// 方法 4：单循环 + 字符串拼接（减少数组操作）

function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
        let row = '';
        // 左半部分（i -> 1）
        for (let j = i; j >= 1; j--) row += j + ' ';
        // 右半部分（2 -> i）
        for (let j = 2; j <= i; j++) row += j + ' ';
        row = row.trim(); // 去掉末尾空格
        console.log(' '.repeat(num - i) + row + ' '.repeat(num - i));
    }
}
printTriangle(5);
// 思路：
// 直接拼接字符串，减少数组操作（适用于大 num 时可能更高效）。
// trim() 去掉末尾多余的空格。

// 方法 5：数学对称生成（利用绝对值）

function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
        let row = '';
        for (let j = -i + 1; j < i; j++) {
            row += (i - Math.abs(j)) + ' ';
        }
        row = row.trim();
        console.log(' '.repeat(num - i) + row + ' '.repeat(num - i));
    }
}
printTriangle(5);
// 思路：
// 利用 Math.abs(j) 计算对称数字（如 i=3 时 j=-2,-1,0,1,2 → 1,2,3,2,1）。
// 这种方法更数学化，减少显式左右部分拼接。