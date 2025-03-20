// https://leetcode.cn/problems/delete-and-earn/
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    // 统计每个数字的总和
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + nums[i]);
    }
    
    // 获取所有不同的数字并排序
    const keys = [...map.keys()].sort((a, b) => a - b);
    
    // 特殊情况处理
    if (keys.length === 0) return 0;
    if (keys.length === 1) return map.get(keys[0]);
    
    // 动态规划数组
    // dp[i] 表示考虑前 i 个数字能获得的最大点数
    const dp = new Array(keys.length);
    
    // 初始化
    dp[0] = map.get(keys[0]);
    
    // 如果第二个数字与第一个数字相差1，则不能同时选择
    if (keys[1] === keys[0] + 1) {
        dp[1] = Math.max(dp[0], map.get(keys[1]));
    } else {
        // 否则可以同时选择
        dp[1] = dp[0] + map.get(keys[1]);
    }
    
    // 动态规划过程
    for (let i = 2; i < keys.length; i++) {
        if (keys[i] === keys[i-1] + 1) {
            // 如果当前数字与前一个数字相差1，则不能同时选择
            dp[i] = Math.max(dp[i-1], dp[i-2] + map.get(keys[i]));
        } else {
            // 否则可以同时选择当前数字和前一个数字
            dp[i] = dp[i-1] + map.get(keys[i]);
        }
    }
    
    return dp[keys.length - 1];
};