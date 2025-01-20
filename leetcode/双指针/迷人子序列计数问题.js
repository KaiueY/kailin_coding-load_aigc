// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7414004855076339756

// function solution(n, k, sequence) {
//     let left = 0;
//     let result = 0;
  
//     for (let right = 0; right < n; right++) {
//         // 动态维护当前窗口的最大值和最小值
//         let currentMax = sequence[right];
//         let currentMin = sequence[right];
  
//         // 从右向左遍历当前窗口，更新最大值和最小值
//         for (let i = right; i >= left; i--) {
//             currentMax = Math.max(currentMax, sequence[i]);
//             currentMin = Math.min(currentMin, sequence[i]);
  
//             // 如果当前窗口的最大值和最小值之差超过 k，移动左指针
//             if (currentMax - currentMin > k) {
//                 left = i + 1; // 移动左指针
//                 break;
//             }
//         }
  
//         // 统计当前窗口内的所有子数组数量
//         result += right - left + 1;
//     }
  
//     return result;
//   }
function solution(n, k, sequence) {
    let left = 0;
    let result = 0;
    const maxQueue = []; 
    const minQueue = []; 

    for (let right = 0; right < n; right++) {
        // 维护最大值队列
        while (maxQueue.length && sequence[right] > sequence[maxQueue[maxQueue.length - 1]]) {
            maxQueue.pop();
        }
        maxQueue.push(right);

        while (minQueue.length && sequence[right] < sequence[minQueue[minQueue.length - 1]]) {
            minQueue.pop();
        }
        minQueue.push(right);

        while (sequence[maxQueue[0]] - sequence[minQueue[0]] > k) {
            if (maxQueue[0] === left) maxQueue.shift();
            if (minQueue[0] === left) minQueue.shift();
            left++;
        }

        result += right - left + 1;
    }

    return result;
}

function main() {
    const sequence1 = [3, 1, 2, 4];
    const sequence2 = [7, 3, 5, 1, 9];
    const sequence3 = [2, 2, 3, 1, 1, 2];

    console.log(solution(4, 2, sequence1)); // 输出 8
    console.log(solution(5, 3, sequence2)); // 输出 6
    console.log(solution(6, 1, sequence3)); // 输出 12
}

main();