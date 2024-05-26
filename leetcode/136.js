// 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
// 示例 ：
// 输入：nums = [4,1,2,1,2]
// 输出：4
/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] !== nums[i + 1]) return nums[i];
    }
    return nums[nums.length - 1]; // 如果没有找到，则最后一个元素是唯一的
};

//方法2:异操作
// 异或操作有以下性质：

// 任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0 = a。
// 任何数和其自身做异或运算，结果是 0，即 a ^ a = 0。
// 异或运算满足交换律和结合律，即 a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b。
var singleNumber = function(nums) {
        let result = 0;
        for (let num of nums) {
            result ^= num;
        }
        return result;
};

console.log(singleNumber([4,1,2,1,2]));