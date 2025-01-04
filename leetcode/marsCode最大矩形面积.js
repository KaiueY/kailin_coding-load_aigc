// 问题描述
// 对于一个有 N 个元素的数组，包含如下的元素 h1, h2, ..., hn，对于 k 个相邻的元素，我们定义它的最大面积如下：
// R(k) = k * min(h[i], h[i+1], ..., h[i+k-1])
// 求 R(k) 的最大值

// 输入格式
// 总共有两行，第一行是数组长度 N，第二个是空格分割的所有数组的内容

// 输出格式
// 输出 R(k) 的最大值

// 输入样例
// 5
// 1 2 3 4 5
// 输出样例
// 9


function solution(n, array) {
    let maxArea = 0;

    // 遍历每一个可能的子数组长度 k
    for (let k = 1; k <= n; k++) {
        // 使用滑动窗口来计算每个长度为 k 的子数组的最小值
        for (let i = 0; i <= n - k; i++) {
            let minVal = Math.min(...array.slice(i, i + k)); // 找出当前子数组的最小值
            let area = k * minVal; // 计算当前子数组的面积
            maxArea = Math.max(maxArea, area); // 更新最大面积
        }
    }

    return maxArea;
}

function main() {
    // Add your test cases here
    console.log(solution(5, [1, 2, 3, 4, 5]) === 9);
}

main();
