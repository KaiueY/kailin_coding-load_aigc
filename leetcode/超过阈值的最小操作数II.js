// https://leetcode.cn/problems/minimum-operations-to-exceed-threshold-value-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const action = (nums) =>{
        let [x,y] = nums
        return nums.push(x*2+y)
    } 
    let result = 0
    let success = true
    while(success){
        nums = nums.sort((a,b)=>a-b)
        if(nums[0]>= k){
            return result
        }else{
            nums = action(nums)
            result ++ 
        }
    }
    return result
};
console.log(minOperations([2,11,10,1,3],10));

