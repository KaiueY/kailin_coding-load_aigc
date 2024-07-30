/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 🌶︎🐔解法

// var myPow = function(x, n) {
//     if (n === 0) {
//         return 1;
//     }
//     if (x === 0) {
//         return 0;
//     }

//     let isNegative = n < 0;
//     n = Math.abs(n);

//     function power(base, exp) {
//         if (exp === 0) {
//             return 1;
//         }
//         let half = power(base, Math.floor(exp / 2));
//         if (exp % 2 === 0) {
//             return half * half;
//         } else {
//             return half * half * base;
//         }
//     }

//     let result = power(x, n);
//     return isNegative ? 1 / result : result;
// };

// 优秀
var myPow = function(x, n) {
    // 如果底数为0，任何数的0次幂都为0
    if (x == 0) return 0;
    // 如果指数为0或底数为1，任何数的0次幂都为1，1的任何次幂也为1
    if (n == 0 || x == 1) return 1;
    // 如果指数为负数，计算其倒数
    if (n < 0) {
        return (1 / myPow(x, -n));
    }
    let ans = 1;
    // 循环计算
    while (n > 0) {
        // 如果当前指数为奇数，将当前的底数乘到结果中
        if(n % 2 === 1) ans *= x;
        // 底数自乘，指数减半
        x *= x;
        n = Math.floor(n / 2);
    }
    return ans;
};
