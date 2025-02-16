// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424436653624000556
function solution(n, a) {
    if (n <= 1) return n;
    
    let left = 0;
    let right = 1;
    let maxLen = 1;
    let currentLen = 1;
    
    while (right < n) {
        if (Math.abs(a[right] - a[right - 1]) <= 1) {
            currentLen++;
            right++;
        } else {
            maxLen = Math.max(maxLen, currentLen);
            left = right;
            right++;
            currentLen = 1;
        }
    }
    
    return Math.max(maxLen, currentLen);
}

function main() {
    console.log(solution(5, [2, 4, 2, 3, 2]) === 3);
    console.log(solution(6, [1, 2, 2, 3, 4, 1]) === 5);
    console.log(solution(7, [5, 5, 6, 7, 7, 6, 5]) === 7);
}

main();