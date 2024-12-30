// 问题描述
// 小F最近迷上了玩一款游戏，她面前有一个永久代币卡的购买机会。该卡片的价格为 a 勾玉，每天登录游戏可以返还 b 勾玉。小F想知道她至少需要登录多少天，才能让购买的永久代币卡回本。

// 测试样例
// 样例1：

// 输入：a = 10, b = 1
// 输出：10
function solution(a, b) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    return a%b==0?a/b :Math.ceil(a/b)
}

function main() {
    console.log(solution(10, 1) === 10);
    console.log(solution(10, 2) === 5);
    console.log(solution(10, 3) === 4);
}

main();