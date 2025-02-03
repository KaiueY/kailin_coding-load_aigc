// https://leetcode.cn/problems/partition-labels/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const last = new Array(26).fill(-1); // 使用 fill 初始化数组
    const codePointA = 'a'.charCodeAt(0); // 使用 charCodeAt 替代 codePointAt

    // 记录每个字符最后出现的位置
    for (let i = 0; i < s.length; i++) {
        last[s.charCodeAt(i) - codePointA] = i;
    }

    const partition = [];
    let start = 0, end = 0;

    // 遍历字符串，确定每个分区的结束位置
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s.charCodeAt(i) - codePointA]);
        if (i === end) {
            partition.push(end - start + 1);
            start = end + 1;
        }
    }

    return partition;
};