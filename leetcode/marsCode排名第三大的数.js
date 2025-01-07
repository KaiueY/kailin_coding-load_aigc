// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560931495980
// 小M想要通过查看往届游戏比赛的排名来确定自己比赛的目标分数。他希望找到往届比赛中排名第三的分数，作为自己的目标。具体规则如下：

// 如果分数中有三个或以上不同的分数，返回其中第三大的分数。
// 如果不同的分数只有两个或更少，那么小M将选择最大的分数作为他的目标。
// 请你帮小M根据给定的分数数组计算目标分数。
function solution(n, nums) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    const result = Array.from(new Set(nums)).sort((a, b) => b - a);
    
    if (result.length < 3) {
        return result[0];
    }
    
    return result[2];
}

function main() {
    console.log(solution(3, [3, 2, 1]) === 1);
    console.log(solution(2, [1, 2]) === 2);
    console.log(solution(4, [2, 2, 3, 1]) === 1);
}

main();