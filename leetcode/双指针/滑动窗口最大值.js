https://leetcode.cn/problems/sliding-window-maximum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = [];
    // 队列存储的是索引
    let deque = []; 

    for (let i = 0; i < nums.length; i++) {
        // 移除队列中已经不在当前窗口内的元素（即索引小于 i - k）
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // 保持队列的递减性
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 将当前元素的索引加入队列
        deque.push(i);

        // 当窗口已经形成，记录当前窗口的最大值
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};