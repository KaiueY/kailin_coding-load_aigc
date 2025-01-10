// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7414004855076601900
function solution(n, arr) {
    let maxProduct = -Infinity;
    let currentProduct = 1;
    let start = 0;
    let end = 0;
    let resultStart = -1;
    let resultEnd = -1;

    // 遍历数组
    for (let i = 0; i < n; i++) {
        // 如果当前元素为0，重置当前区间的起始位置
        if (arr[i] === 0) {
            currentProduct = 1;
            start = i + 1;
            continue;
        }

        // 计算当前区间的乘积
        currentProduct *= arr[i];

        // 更新最大乘积和对应的区间
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
            resultStart = start;
            resultEnd = i;
        } else if (currentProduct === maxProduct) {
            // 如果乘积相同，优先选择起始位置更小的区间
            if (start < resultStart) {
                resultStart = start;
                resultEnd = i;
            } else if (start === resultStart && i < resultEnd) {
                // 如果起始位置相同，选择结束位置更小的区间
                resultEnd = i;
            }
        }
    }

    // 返回结果
    return [resultStart + 1, resultEnd + 1];
}

function main() {
    // Add your test cases here
    console.log(solution(5, [1, 2, 4, 0, 8]).toString() === [1, 3].toString());
    console.log(solution(7, [1, 2, 4, 8, 0, 256, 0]).toString() === [6, 6].toString());
}

main();
