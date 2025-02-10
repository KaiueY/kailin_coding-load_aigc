// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560931561516
function solution(n, a) {
    let max = -Infinity;
     if(n<2) return 0                       
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // 计算顺时针和逆时针距离
            const clockwiseDistance = (j - i + n) % n;
            const counterClockwiseDistance = (i - j + n) % n;            
            // 取较小的距离
            const distance = Math.min(clockwiseDistance, counterClockwiseDistance);       
            // 计算贡献值
            const contribution = (a[i] + a[j]) * distance;    
            // 更新最大值
            if (contribution > max) {
                max = contribution;
            }
        }
    }
    return max;
}

function main() {
    console.log(solution(3, [1, 2, 3]) === 5);
    console.log(solution(4, [4, 1, 2, 3]) === 12);
    console.log(solution(5, [1, 5, 3, 7, 2]) === 24);
}

main();