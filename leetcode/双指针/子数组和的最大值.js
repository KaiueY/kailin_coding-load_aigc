// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7414004855076438060
function solution(n, k, nums) {
    // Edit your code here
    // 找到子数组中长度为K+1的和最大的子数组，那么删除数组中的最小值，就是答案了。
    if (n === k) {
        return nums.reduce((a, b) => a + b, 0);
    }

    let windowSize = k + 1;
    if (windowSize > n) {
        // 不可能，因为题目中 n >= k
        return 0;
    }

    let currentSum = 0;
    for (let i = 0; i < windowSize; i++) {
        currentSum += nums[i];
    }
    let maxSum = currentSum;
    let maxWindow = nums.slice(0, windowSize);

    for (let i = windowSize; i < n; i++) {
        currentSum += nums[i] - nums[i - windowSize];
        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxWindow = nums.slice(i - windowSize + 1, i + 1);
        }
    }

    let minInWindow = Math.min(...maxWindow);
    let result = maxSum - minInWindow;
    return result;
}

function main() {
    // Add your test cases here
    console.log(solution(5, 3, [2, 1, 3, -1, 4]) === 8);
}

main();
