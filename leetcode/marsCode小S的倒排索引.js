function intersection(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    const result = [];

    for (let item of setA) {
        if (setB.has(item)) {
            result.push(item);
        }
    }

    return result;
}

// Example usage:
const array1 = [1, 2, 2, 1];
const array2 = [2, 2];
console.log(intersection(array1, array2)); // Output: [2]