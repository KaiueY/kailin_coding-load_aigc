// https://leetcode.cn/problems/PzWKhm/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    let dp = new Array(nums.length).fill(0);
    
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    const robLinear = (arr) => {
        const m = arr.length;
        let prev2 = 0, prev1 = 0;
        for (let i = 0; i < m; i++) {
            const temp = Math.max(prev1, prev2 + arr[i]);
            prev2 = prev1;
            prev1 = temp;
        }
        return prev1;
    };

    return Math.max(robLinear(nums.slice(0, n - 1)), robLinear(nums.slice(1)));
};
rob([1,2,3,1])