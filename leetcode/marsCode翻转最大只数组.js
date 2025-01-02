/**
 * 问题描述
 * 小C面对一个由整数构成的数组，他考虑通过一次操作提升数组的潜力。
 * 这个操作允许他选择数组中的任一子数组并将其翻转，
 * 目的是在翻转后的数组中找到具有最大和的子数组。
 * 小C对这个可能性很感兴趣，并希望知道翻转后的数组中可能得到的最大子数组和是多少。
 *
 * 例如，数组是 1, 2, 3, -1, 4。
 * 小C可以选择翻转子数组 -1, 4 得到 1, 2, 3, 4, -1 或者翻转 1, 2, 3, -1 得到 -1, 3, 2, 1, 4，
 * 在这两种情况下，最大的子数组和都是 10。
 *
 * 备注：子数组 是数组中的一个连续部分
 */
function solution(N, data_array) {
    function kadane(arr) {
        let maxSoFar = arr[0];
        let maxEndingHere = arr[0];
        for (let i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    let originalMaxSum = kadane(data_array);

    let maxSumAfterReverse = originalMaxSum;

    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            let newArray = [...data_array];
            let leftPart = newArray.slice(0, i);
            let middlePart = newArray.slice(i, j + 1).reverse();
            let rightPart = newArray.slice(j + 1);
            newArray = [...leftPart, ...middlePart, ...rightPart];

            let newMaxSum = kadane(newArray);
            maxSumAfterReverse = Math.max(maxSumAfterReverse, newMaxSum);
        }
    }

    return maxSumAfterReverse;
}

function main() {
    // You can add more test cases here
    const array1 = [
        -85, -11, 92, 6, 49, -76, 28, -16, 3, -29, 26, 37, 86, 3, 25, -43, -36,
        -27, 45, 87, 91, 58, -15, 91, 5, 99, 40, 68, 54, -95, 66, 49, 74, 9, 24,
        -84, 12, -23, -92, -47, 5, 91, -79, 94, 61, -54, -71, -36, 31, 97, 64,
        -14, -16, 48, -79, -70, 54, -94, 48, 37, 47, -58, 6, 62, 19, 8, 32, 65,
        -81, -27, 14, -18, -34, -64, -97, -21, -76, 51, 0, -79, -22, -78, -95,
        -90, 4, 82, -79, -85, -64, -79, 63, 49, 21, 97, 47, 16, 61, -46, 54, 44,
    ];
    console.log(solution(5, [1, 2, 3, -1, 4]) === 10);
    console.log(solution(100, array1) === 1348);
}

main();

