
// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7414004855074766892
function solution(x_position, y_position) {
    let distance = Math.abs(y_position - x_position);
    let step = 0;
    let sum = 0;

    while (true) {
        step++;
        sum += step;
        if (sum >= distance && (sum - distance) % 2 === 0) {
            break;
        }
    }

    return step;
}

function main() {       
    // You can add more test cases here
    console.log(solution(12, 6) === 4);
    console.log(solution(34, 45) === 6);
    console.log(solution(50, 30) === 8);
}

main();
