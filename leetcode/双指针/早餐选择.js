// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560929759276
function solution(staples, drinks, x) {
    let count = 0;

    // 遍历所有主食
    for (let i = 0; i < staples.length; i++) {
        // 只选择主食的情况
        if (staples[i] <= x) {
            count++;
        }
        // 遍历所有饮料
        for (let j = 0; j < drinks.length; j++) {
            // 选择主食和饮料的组合
            if (staples[i] + drinks[j] <= x) {
                count++;
            }
        }
    }

    // 只选择饮料的情况
    for (let j = 0; j < drinks.length; j++) {
        if (drinks[j] <= x) {
            count++;
        }
    }

    return count;
}

function main() {
    console.log(solution([5, 20, 5], [5, 5, 2], 5) === 5);
    console.log(solution([3, 10, 7], [2, 5], 7) === 5);
    console.log(solution([10, 15], [5, 6], 20) === 7);
}

main();