// https://leetcode.cn/problems/happy-n/
/**
 * @param {n} n
 * @return {boolean}
 */
var isHappy = function (n) {
    function getNext(n) {
        let totalSum = 0;
        while (n > 0) {
            const digit = n % 10;
            totalSum += digit * digit;
            n = Math.floor(n / 10);
        }
        return totalSum;
    }

    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
};