/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    const map = new Map()
    nums.forEach((element)=>{
        map.set(element, (map.get(element) || 0) + 1);
        if(map.get(element) === 3) return false
    })
    return true
};