// 问题描述
// 小U得到了一个数字n，他的任务是构造一个特定数组。这个数组的构造规则是：对于每个i从1到n，将数字n到i逆序拼接，直到i等于n为止。最终，输出这个拼接后的数组。

// 例如，当n等于3时，拼接后的数组是 [3, 2, 1, 3, 2, 3]。

// 测试样例
// 样例1：

// 输入：n = 3
// 输出：[3, 2, 1, 3, 2, 3]
function solution(n) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    let result = [];
    
    // 遍历 i 从 1 到 n
    for (let i = 1; i <= n; i++) {
        // 生成从 n 到 i 的逆序数组并拼接到 result
        for (let j = n; j >= i; j--) {
            result.push(j);
        }
    }
    return result;
}

function main() {
    console.log(JSON.stringify(solution(3)) === JSON.stringify([3, 2, 1, 3, 2, 3]));
    console.log(JSON.stringify(solution(4)) === JSON.stringify([4, 3, 2, 1, 4, 3, 2, 4, 3, 4]));
    console.log(JSON.stringify(solution(5)) === JSON.stringify([5, 4, 3, 2, 1, 5, 4, 3, 2, 5, 4, 3, 5, 4, 5]));
}

main();