function threeSum(nums){
    nums.sort((a,b)=>a-b)
    const result = []

    const len = nums.length
    for(let i = 0;i<len-2;i++ ){
        let  left= i+1
        let right = len-1
        if(nums[i]<0){
            while(left<right){
                const sum = nums[i] + nums[left] +nums[right]
                if(sum === 0 ){
                    result.push([nums[i],nums[left],nums[right]])
                    // 跳过相同的值
                    while(left<right && nums[left]===nums[left+1]) left++
                    while(left<right && nums[right]===nums[right-1]) right--
                    
                    left++
                    right--
                } else if(sum<0){
                    left++
                }else{
                    right --
                }
            }
        }

    }
    return result
}
// 上面的解法超时了 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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