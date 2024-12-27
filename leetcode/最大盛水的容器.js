/**
 * 给定一个长度为 n 的数组 height。数组中有 n 条垂直线，第 i 条线的端点为 (i, 0) 和 (i, height[i])。
 * 
 * 找出两条线，使得它们与 x 轴一起形成一个容器，使容器能够容纳最多的水。
 * 
 * 返回容器可以存储的最大水量。
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    max = 0
    
    const caculate = (left,right,nums) =>{
        let len = right-left
        let hig = Math.min(nums[left],nums[right])
        return len * hig
    }

    while (left < right) {
        max = Math.max(max,caculate(left,right,height))
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }

};