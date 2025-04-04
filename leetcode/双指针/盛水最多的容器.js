// https://leetcode.cn/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    function getArea(left, right) {
        return (right - left) * Math.min(height[left], height[right]);
    }
    let maxArea = -Infinity;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        maxArea = Math.max(maxArea, getArea(left, right));
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

    }
    return maxArea;
};