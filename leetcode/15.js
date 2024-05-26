// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 
// 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。

// 请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：

// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：

// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。
 

// 提示：

// 3 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//双指针法
var threeSum = function(nums) {
    var result = [];
    // 先对数组进行排序
    nums.sort((a,b)=>a-b); 
    for (var i = 0; i < nums.length - 2; i++) {
        // 跳过重复的元素
        if (i > 0 && nums[i] === nums[i - 1]) continue; 
        var target = -nums[i];
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var sum = nums[left] + nums[right];
            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                // 跳过重复的元素
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
var nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
console.log(threeSum(nums));
