https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560667402284
function solution(n, a) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    let scores = new Array(n).fill(0); // 初始化得分数组

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] === a[j]) {
                // 值相等，索引小的赢
                scores[i] += 1;
            } else {
                // 值不相等，索引大的赢
                scores[j] += 1;
            }
        }
    }
    
    return scores;
}

function main() {
    console.log(JSON.stringify(solution(3, [0, 0, 1])) === JSON.stringify([1, 0, 2]));
    console.log(JSON.stringify(solution(4, [1, 0, 1, 0])) === JSON.stringify([1, 2, 1, 2]));
    console.log(JSON.stringify(solution(5, [0, 1, 0, 1, 0])) === JSON.stringify([2, 2, 2, 2, 2]));
}

main();