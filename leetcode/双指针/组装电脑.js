// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560932053036
function solution(n, a, b) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    const countA = new Map();
    for (const num of a) {
        countA.set(num, (countA.get(num) || 0) + 1);
    }

    // 统计零件数组中每个元素的出现次数
    const countB = new Map();
    for (const num of b) {
        countB.set(num, (countB.get(num) || 0) + 1);
    }

    // 生成所有可能的售价候选值
    const sCandidates = new Set();
    for (const x of countA.keys()) {
        for (const y of countB.keys()) {
            sCandidates.add(x + y);
        }
    }

    // 计算最大配对数目
    let maxCount = 0;
    for (const s of sCandidates) {
        let current = 0;
        for (const x of countA.keys()) {
            const target = s - x;
            if (countB.has(target)) {
                current += Math.min(countA.get(x), countB.get(target));
            }
        }
        if (current > maxCount) {
            maxCount = current;
        }
    }

    return maxCount;
}
function main() {
    console.log(solution(4, [1, 2, 3, 4], [1, 2, 4, 5]) === 3);
    console.log(solution(3, [1, 1, 2], [2, 2, 3]) === 2);
    console.log(solution(5, [5, 5, 5, 5, 5], [1, 2, 3, 4, 5]) === 1);
}

main();