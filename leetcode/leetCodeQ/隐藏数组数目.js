/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let current = 0;
    let min = 0;
    let max = 0;

    for (const diff of differences) {
        current += diff;
        min = Math.min(min, current);
        max = Math.max(max, current);
    }

    const minInitial = lower - min;
    const maxInitial = upper - max;

    return Math.max(0, maxInitial - minInitial + 1);
};
console.log(numberOfArrays([4,-7,2],3,6));
