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


var findPeakElement = function(nums) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (compare(nums, mid - 1, mid) < 0 && compare(nums, mid, mid + 1) > 0) {
            ans = mid;
            break;
        }
        if (compare(nums, mid, mid + 1) < 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

// 辅助函数，输入下标 i，返回一个二元组 (0/1, nums[i])
// 方便处理 nums[-1] 以及 nums[n] 的边界情况
const get = (nums, idx) => {
    if (idx === -1 || idx === nums.length) {
        return [0, 0];
    }
    return [1, nums[idx]];
}

const compare = (nums, idx1, idx2) => {
    const num1 = get(nums, idx1);
    const num2 = get(nums, idx2);
    if (num1[0] !== num2[0]) {
        return num1[0] > num2[0] ? 1 : -1;
    }
    if (num1[1] === num2[1]) {
        return 0;
    }
    return num1[1] > num2[1] ? 1 : -1;
}
