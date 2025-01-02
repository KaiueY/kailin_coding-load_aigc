/**
 * Monocarp and Stereocarp are preparing for the Olympiad. There are `n` days left until the Olympiad.
 * Monocarp 和 Stereocarp 正在为奥林匹克竞赛做准备。距离奥林匹克竞赛还有 `n` 天。
 * On the `i`-th day, if Monocarp plans to practice, he will solve `ai` problems.
 * 在第 `i` 天，如果 Monocarp 计划练习，他将解决 `ai` 个问题。
 * Similarly, if Stereocarp plans to practice on the same day, he will solve `bi` problems.
 * 同样地，如果 Stereocarp 计划在同一天练习，他将解决 `bi` 个问题。
 * Monocarp can train on any day he wants. However, Stereocarp watches Monocarp and follows a different schedule:
 * Monocarp 可以在任何一天训练。然而，Stereocarp 观察 Monocarp 并遵循不同的时间表：
 * if Monocarp trained on day `i` and `i < n`, then Stereocarp will train on day `(i + 1)`.
 * 如果 Monocarp 在第 `i` 天训练且 `i < n`，那么 Stereocarp 将在第 `(i + 1)` 天训练。
 * Monocarp wants to organize his training process in a way that the difference between the number of problems he solves
 * Monocarp 希望组织他的训练过程，使他解决的问题数量与 Stereocarp 解决的问题数量之间的差异尽可能大。
 * and the number of problems Stereocarp solves is as large as possible. Formally, Monocarp wants to maximize the value of `(m - s)`,
 * 形式上，Monocarp 希望最大化 `(m - s)` 的值，其中 `m` 是他解决的问题数量，`s` 是 Stereocarp 解决的问题数量。
 * where `m` is the number of problems he solves, and `s` is the number of problems Stereocarp solves.
 * 帮助 Monocarp 确定他们之间解决问题数量的最大可能差异。
 *  Help Monocarp determine the maximum possible difference in the number of solved problems between them.
 * @param {number} t - The number of test cases (1 ≤ t ≤ 103).
 * @param {Array<{n: number, a: number[], b: number[]}>} testCases - An array of test cases, each containing:
 * @param {number} n - The number of days (1 ≤ n ≤ 100).
 * @param {number[]} a - An array of integers representing the number of problems Monocarp solves each day (1 ≤ ai ≤ 100).
 * @param {number[]} b - An array of integers representing the number of problems Stereocarp solves each day (1 ≤ bi ≤ 100).
 * @returns {number[]} - An array of integers, each representing the maximum possible difference between the number of problems Monocarp solves and the number of problems Stereocarp solves for each test case.
 * 
 * 示例:
 * 输入:
 * 4
 * 2
 * 3 2
 * 2 1
 * 1
 * 5
 * 8
 * 3
 * 1 1 1
 * 2 2 2
 * 6
 * 8 2 5 6 2 6
 * 8 2 7 4 3 4
 * 
 * 输出:
 * 4
 * 5
 * 1
 * 16
 */
function maxDifference(input) {
    var lines = input.trim().split("\n");
    var result = []
    // console.log(lines);
    var solution = (day,a,b) =>{
        b.push(0)
        let ans =0
        for(let i =0;i<day;i++){
            if(a[i]>b[i+1]){
                ans += a[i]-b[i+1]
            }
        }
        result.push(ans)
    }
    for(let i = 1,index = 0;index<lines[0];i+=3,index++){
        solution(lines[i],lines[i+1].split(" ").map(Number),lines[i+2].split(" ").map(Number))
        console.log(lines[i]);
        console.log(lines[i+1].split(" ").map(Number));
        console.log(lines[i+2].split(" ").map(Number));
    }
    return result
}
function main(){
    let result = maxDifference(`4
2
3 2
2 1
1
5
8
3
1 1 1
2 2 2
6
8 2 5 6 2 6
8 2 7 4 3 4
`)
    result.forEach((element)=>{
        if(element){
            console.log(element);
        }
        
    })
} 
main()