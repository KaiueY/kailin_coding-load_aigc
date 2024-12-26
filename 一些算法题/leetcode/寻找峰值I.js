/**
 * 852. 山脉数组的峰顶索引
 * 已解答
 * 中等
 * 
 * 给定一个长度为 n 的整数山脉数组 arr，其中的值递增到一个峰值元素然后递减。
 * 
 * 返回峰值元素的下标。
 * 
 * 你必须设计并实现时间复杂度为 O(log(n)) 的解决方案。
 * 
 * 示例 1：
 * 输入：arr = [0,1,0]
 * 输出：1
 * 
 * 示例 2：
 * 输入：arr = [0,2,1,0]
 * 输出：1
 * 
 * 示例 3：
 * 输入：arr = [0,10,5,2]
 * 输出：1
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};