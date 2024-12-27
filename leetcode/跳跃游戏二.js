/**
 * @description 45. 跳跃游戏 II
 * @param {number[]} nums 整数数组,表示每个位置可以跳跃的最大长度
 * @return {number} 到达最后一个位置的最小跳跃次数
 * 
 * @example
 * 输入: nums = [2,3,1,1,4]
 * 输出: 2
 * 解释: 从下标为0跳到下标为1的位置,跳1步,然后跳3步到达数组的最后一个位置
 * 
 * @example
 * 输入: nums = [2,3,0,1,4] 
 * 输出: 2
 * 
 * @思路
 * 1. 贪心算法,每次在可跳范围内选择可以到达最远距离的位置
 * 2. 使用当前能跳到的最远位置curFarthest和下一步能跳到的最远位置nextFarthest
 * 3. 遍历数组,不断更新nextFarthest,当到达curFarthest时,更新curFarthest并且步数+1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 在这里写入具体实现
    let right = 0
    let len = nums.length-1
    let maxStep = 0
    let result = 0
    for(let i =0 ;i<len; i++){
        maxStep = Math.max(maxStep,i+nums[i])
        if(i=== right){
            right = maxStep
            result++
        }
    }
    return result
};