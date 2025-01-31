// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560931266604
// 问题描述
// 给定一个数组，任务是找到数组中的最长递减子数组。如果存在多个长度相同的最长递减子数组，则返回第一个出现的子数组。

// 例如：对于输入的数组 9 5 4 3 2 5 4 3 2，最长递减子数组是 9 5 4 3 2，因此应输出该子数组。

// 测试样例
// 样例1：

// 输入：arr = [9, 5, 4, 3, 2, 5, 4, 3, 2]
// 输出：[9, 5, 4, 3, 2]
function solution(arr) {
    if (!arr || arr.length === 0) return [];
    if (arr.length === 1) return [arr[0]];
    
    let maxLen = 1;          // 最长递减子数组的长度
    let maxStart = 0;        // 最长递减子数组的起始位置
    let currentLen = 1;      // 当前递减子数组的长度
    let currentStart = 0;    // 当前递减子数组的起始位置
    
    // 遍历数组，寻找递减序列
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            // 当前元素小于前一个元素，递减序列继续
            currentLen++;
            if (currentLen > maxLen) {
                // 更新最长递减序列的信息
                maxLen = currentLen;
                maxStart = currentStart;
            }
        } else {
            // 递减序列中断，重新开始计数
            currentLen = 1;
            currentStart = i;
        }
    }
    
    // 返回最长递减子数组
    return arr.slice(maxStart, maxStart + maxLen);
}

function main() {
    console.log(JSON.stringify(solution([9, 5, 4, 3, 2, 5, 4, 3, 2])) === JSON.stringify([9, 5, 4, 3, 2]));
    console.log(JSON.stringify(solution([8, 7, 6, 5, 6, 5, 4, 3, 1])) === JSON.stringify([6, 5, 4, 3, 1]));
    console.log(JSON.stringify(solution([1, 2, 3, 4, 5])) === JSON.stringify([1]));
}

main();