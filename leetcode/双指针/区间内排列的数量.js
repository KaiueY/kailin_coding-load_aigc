// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560665042988
const n = arr.length;
let count = 0;

// 遍历所有可能的子区间长度 k
for (let k = 1; k <= n; k++) {
    // 使用滑动窗口检查所有长度为 k 的子区间
    for (let i = 0; i <= n - k; i++) {
        const window = arr.slice(i, i + k); 
        const set = new Set(window); 
        const min = Math.min(...window); 
        const max = Math.max(...window); 

        if (
            set.size === k && 
            min === 1 && 
            max === k
        ) {
            count++; 
        }
    }
}

return count;
function main() {
    console.log(solution(5, [2, 1, 5, 3, 4]) === 3);
    console.log(solution(5, [1, 2, 3, 4, 5]) === 5);
    console.log(solution(4, [4, 3, 2, 1]) === 4);
}

main();