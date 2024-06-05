// 合并两个有序数组
// 给你两个按 非递减顺序 排列的整数数组 nums1 **和 nums2，
// 另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。 
// 请你 合并 nums2 **到 nums1 中，使合并后的数组同样按 非递减顺序 排列。 
// 注意： 最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
// 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
// 输入： nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出： [1,2,2,3,5,6]
// 解释： 需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] 
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

vfunction merge(nums1, m, nums2, n) {
    // 指针分别指向 nums1 和 nums2 的末尾以及 nums1 的末尾
    let i = m - 1, j = n - 1, k = m + n - 1;

    // 从后向前合并数组
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // 如果 nums2 有剩余，继续合并
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// 既然要把num2加入num1，那么就从num2[index2]开始比较num1[index1],如果遇见比num2[index2]大的数，那么就可以将num2[index2]插入num1[index1]前面，同时呢，num1往后面挤掉一个0。同时呢，如果num1最后一个非0数都比num2第一个数小，那么直接将num2全部加入到num1.
// js复制代码function merge(nums1, m, nums2, n) {
//     // 从 nums2 中逐一取出元素
//     for (let i = 0; i < n; i++) {
//         // 当前需要插入的元素
//         let current = nums2[i];

//         // 在 nums1 的前 m+i 个元素中找到插入位置
//         let j = 0;
//         while (j < m + i && nums1[j] <= current) {
//             j++;
//         }

//         // 插入元素并更新 nums1 的长度
//         nums1.splice(j, 0, current);
//         nums1.pop(); // 移除最后一个 0 以保持数组长度
//     }
// }
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;
// merge(nums1, m, nums2, n);
// console.log(nums1);  // 输出应为 [1, 2, 2, 3, 5, 6]