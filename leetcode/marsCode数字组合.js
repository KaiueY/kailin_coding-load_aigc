/**
 * 问题描述
 * 小F面临一个有趣的挑战：给定一个数组，她需要将数组中的数字分为两组。
 * 分组的目标是使得一组数字的和的个位数等于给定的 A，另一组数字的和的个位数等于给定的 B。
 * 除此之外，还有一种特殊情况允许其中一组为空，但剩余数字和的个位数必须等于 A 或 B。
 * 小F需要计算所有可能的划分方式。
 *
 * 例如，对于数组 [1, 1, 1] 和目标 A = 1，B = 2，可行的划分包括三种：
 * 每个 1 单独作为一组，其余两个 1 形成另一组。
 * 如果 A = 3，B = 5，当所有数字加和的个位数为 3 或 5 时，可以有一组为非空，另一组为空。
 *
 * 测试样例
 * 样例1：
 * 输入：n = 3, A = 1, B = 2, array_a = [1, 1, 1]
 * 输出：3
 */

function countPartitions(n, A, B, array_a) {
    let count = 0;

    function dfs(index, sum1, sum2) {
        if (index === n) {
            if ((sum1 % 10 === A && sum2 % 10 === B) || (sum1 % 10 === B && sum2 % 10 === A) ||
                (sum1 === 0 && sum2 % 10 === A) || (sum1 === 0 && sum2 % 10 === B) ||
                (sum2 === 0 && sum1 % 10 === A) || (sum2 === 0 && sum1 % 10 === B)) {
                count++;
            }
            return;
        }

        dfs(index + 1, sum1 + array_a[index], sum2);
        dfs(index + 1, sum1, sum2 + array_a[index]);
    }

    dfs(0, 0, 0);
    return count;
}

// 测试样例
console.log(countPartitions(3, 1, 2, [1, 1, 1])); // 输出：3