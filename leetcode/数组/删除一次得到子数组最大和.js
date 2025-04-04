/**
 * @param {number} n
 * @param {number} k
 * @param {number[]} arr
 * @return {number}
 */
const getMax = function (n, k, arr) {
    if (n <= k) return false;

    let res = -Infinity;

    for (let i = 0; i <= arr.length - (k + 1); i++) {
        let window = arr.slice(i, i + k + 1);

        let min = Math.min(...window);
        let sum = window.reduce((s, v) => s + v, 0) - min;

        res = Math.max(res, sum);
    }

    return res;
}
console.log(getMax(6, 3, [1, 3, -1, 2, 5, -1]));
console.log(getMax(5, 2, [1, 2, 3, 4, 5]));

