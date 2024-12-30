/**
 * 问题描述:
 * 给定一组从 1 到 9 的数字，这些数字被分成多个小组。需要从每个小组中选择一个数字组成一个新的数，
 * 目标是使得这个新数的各位数字之和为偶数。任务是计算出有多少种不同的分组和选择方法可以达到这一目标。
 *
 * 输入:
 * numbers: 一个由多个整数字符串组成的列表，每个字符串可以视为一个数字组。
 * 例如，对于 [123, 456, 789]，14 个符合条件的数为：147, 149, 158, 167, 169, 248, 257, 259, 268, 347, 349, 358, 367, 369。
 *
 * 输出:
 * 返回一个整数，表示有多少种不同的分组和选择方法可以使得新数的各位数字之和为偶数。
 *
 * 测试样例:
 * 样例 1:
 * 输入: numbers = [123, 456, 789]
 * 输出: 14
 * 
 * 
 * @思路
 * 既然只需要偶数，那么就只管奇偶的个数就可以了，
 */

function solution(numbers) {
    // 将数字组转化为奇偶数分组
    const groups = numbers.map(numStr => {
        const nums = numStr.toString().split('').map(Number);
        return {
            odd: nums.filter(n => n % 2 === 1).length, // 奇数
            even: nums.filter(n => n % 2 === 0).length // 偶数
        };
    });
    console.log(groups);
    

    // 递归计算可能的方案数
    function countWays(index, oddCount) {
        // 如果已经选择完所有组，检查总奇数个数是否为偶数
        if (index === groups.length) {
            return oddCount % 2 === 0 ? 1 : 0;
        }

        const group = groups[index];
        let ways = 0;

        // 从当前组中选择一个奇数
        if (group.odd > 0) {
            ways += group.odd * countWays(index + 1, oddCount + 1);
        }

        // 从当前组中选择一个偶数
        if (group.even > 0) {
            ways += group.even * countWays(index + 1, oddCount);
        }

        return ways;
    }

    // 从第 0 组开始，初始奇数个数为 0
    return countWays(0, 0);
}

function main() {
    // You can add more test cases here
    console.log(solution([123, 456, 789]) === 14);
    console.log(solution([123456789]) === 4);
    console.log(solution([14329, 7568]) === 10);
}

main();
