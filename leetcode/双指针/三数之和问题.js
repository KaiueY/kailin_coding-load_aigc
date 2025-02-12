// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424436653370212396
function solution(arr, t) {
    const MOD = 1e9 + 7;
    let res = 0;
    const n = arr.length;

    for (let j = 0; j < n; j++) {
        // 统计左边元素的频率
        const leftMap = new Map();
        for (let i = 0; i < j; i++) {
            const num = arr[i];
            leftMap.set(num, (leftMap.get(num) || 0) + 1);
        }

        // 统计右边元素的频率
        const rightMap = new Map();
        for (let k = j + 1; k < n; k++) {
            const num = arr[k];
            rightMap.set(num, (rightMap.get(num) || 0) + 1);
        }

        const required = t - arr[j];
        let count = 0;

        // 计算满足条件的组合数
        for (const [a, aCount] of leftMap) {
            const b = required - a;
            count += aCount * (rightMap.get(b) || 0);
        }

        res = (res + count) % MOD;
    }

    return res;
}

function main() {
    console.log(solution([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8) === 20);
    console.log(solution([2, 2, 2, 2], 6) === 4);
    console.log(solution([1, 2, 3, 4, 5], 9) === 2);
    console.log(solution([1, 1, 1, 1], 3) === 4);
}

main();