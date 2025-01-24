// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=study-plan-v2&envId=top-100-liked
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const result = []
    let left = 0
    let right = nums.length-1
    while(left < right){
        let milddle = Math.floor((right - left)/2)
        if(nums[milddle] > target){
            right = milddle - 1
        }else if(nums[milddle] < target){
            left = milddle + 1
        }else{
            if(nums[milddle-1] !== target){
                result.push(milddle)
                while(nums[milddle] === target){
                    milddle++
                }
                result.push(milddle-1)
                return result
            }else if(nums[milddle+1]!== target){
                result.push(milddle)
                while(nums[milddle] === target){
                    milddle--
                }
                result.push(milddle+1)
                return result
            }else{
                let le = milddle
                let ri = milddle
                while(nums[le] === target){
                    le--
                }
                result.push(le+1)
                while(nums[ri] === target){
                    ri++
                }
                result.push(ri-1)
                return result
            }
        } 
    }
    return [-1,-1]
};

const findLeft = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (left < nums.length && nums[left] === target) {
        return left;
    }
    return -1;
};
// depseek
const findRight = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (right >= 0 && nums[right] === target) {
        return right;
    }
    return -1;
};

const leftPos = findLeft(nums, target);
if (leftPos === -1) return [-1, -1];
const rightPos = findRight(nums, target);
return [leftPos, rightPos];
