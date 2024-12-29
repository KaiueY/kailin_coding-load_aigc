/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    const map = new Map()
    for(let element of nums){
        map.set(element, (map.get(element) || 0) + 1);
        if(map.get(element) === 3) return false
        console.log(map);
        
    }
    return true
};
console.log( isPossibleToSplit([1,1,1,1]));
