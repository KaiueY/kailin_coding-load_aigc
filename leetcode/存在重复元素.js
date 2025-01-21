// https://leetcode.cn/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        let lastIndex = map.get(nums[i])
        if(lastIndex !== undefined && i-lastIndex<=k){
            return true
        }
        map.set(nums[i], i)
    }
    return false
};