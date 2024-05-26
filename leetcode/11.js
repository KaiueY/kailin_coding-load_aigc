// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 示例 1：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
/**
 * @param {number[]} height
 * @return {number}
 */
//在这个问题中，我们可以使用两个指针 left 和 right，分别指向数组的起始和结束位置。
// 然后，我们计算由当前指针所指的线段构成的容器的容量，并记录最大容量。
// 接着，我们将指向较短线段的指针向中间移动一步（因为移动较长线段的指针不会使容器的容量增加，而只会减少容器的宽度），
// 直到两个指针相遇为止。
var maxArea = function(height) {
    // 初始化最大面积为 0
    let maxArea = 0;
    // 左指针初始位置
    let left = 0;
    // 右指针初始位置
    let right = height.length - 1;

    // 当左指针小于右指针时，进行循环
    while (left < right) {
        // 计算当前左右指针所指的线段的高度的最小值
        const minHeight = Math.min(height[left], height[right]);
        // 计算当前容器的宽度
        const width = right - left;
        // 计算当前容器的面积
        const area = minHeight * width;
        // 更新最大面积
        maxArea = Math.max(maxArea, area);

        // 移动较短的线段指针，以寻找更高的线段
        if (height[left] < height[right]) {
            left++; // 如果左边的线段较短，则将左指针向右移动
        } else {
            right--; // 如果右边的线段较短或相等，则将右指针向左移动
        }
    }
    // 返回最大面积
    return maxArea;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7])); 