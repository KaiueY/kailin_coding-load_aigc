/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToSplitArray(nums) {
    let total = nums.reduce((sum, num) => sum + num, 0);
    let runningSum = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        runningSum += nums[i];
        if (runningSum >= total - runningSum) {
            count++;
        }
    }
    
    return count;
}

// Test cases
console.log(waysToSplitArray([10,4,-8,7])); // 2
console.log(waysToSplitArray([2,3,1,0]));   // 2
console.log(waysToSplitArray([0,0,0,0]));   // 3
