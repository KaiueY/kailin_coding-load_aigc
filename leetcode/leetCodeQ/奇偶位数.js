// htts://leetcode.cn/problems/number-of-even-and-odd-bits/?envType=daily-question&envId=2025-02-20
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    const res = [0, 0];
 let i = 0;
 while (n > 0) {
     res[i] += n & 1;
     n >>= 1;
     i ^= 1;
 }
 return res;
};