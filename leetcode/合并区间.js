
// https://leetcode.cn/problems/insert-interval/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [];
let i = 0;
const n = intervals.length;

// 将所有在新区间之前的区间加入结果
while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
}

// 合并重叠的区间
while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
}
result.push(newInterval);

// 加入剩余的区间
while (i < n) {
    result.push(intervals[i]);
    i++;
}

return result;
};