// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424436653624328236
function solution(values) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    let maxScore = -Infinity
    let maxI = 0
    values.forEach((element,index) => {
        maxScore = Math.max(maxScore,maxI+element-index)
        maxI = Math.max(maxI,element+index)
    });
    return maxScore; // Placeholder return
}

function main() {
    console.log(solution([8, 3, 5, 5, 6]) === 11 ? 1 : 0);
    console.log(solution([10, 4, 8, 7]) === 16 ? 1 : 0);
    console.log(solution([1, 2, 3, 4, 5]) === 8 ? 1 : 0);
}

main();