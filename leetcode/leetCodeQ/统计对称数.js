https://leetcode.cn/problems/count-symmetric-integers/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    const isSymmetric = (num) => {
        const strr = '' + num
        const len = strr.length
        if (len % 2 === 1) return false
        let sum = 0
        for (let i = 0; i < len / 2; i++) {
            sum += +strr[i] - +strr[len - 1 - i]
        }
        return sum === 0
    }
};