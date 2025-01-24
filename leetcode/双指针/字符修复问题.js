// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7414004855077257260


// 问题描述
// 小R有一个由小写字母组成的字符串 str1，长度为 n。字符串中有些位置的字符可以通过修复操作来修改为 a-z 中的任意一个字母，这个修复操作最多可以进行 m 次。
// 现在，小R想知道，经过最多 m 次修复操作后，字符串中由相同字符组成的最长连续子串的最大长度是多少。
// 注意，str2表示哪些下标可以修改，如果为1那么就可以修改，如果为0那么就不行。
// 测试样例
// 样例1：
// 输入：n = 5, m = 2, str1 = "abcda", str2 = "01110"
// 输出：3

function solution(n, m, str1, str2) {
    let maxLen = 0;
    
    // 对每个可能的字符进行单独处理
    for (let target = 0; target < 26; target++) {
        let left = 0, cost = 0;
        for (let right = 0; right < n; right++) {
            // 计算将当前字符转换为目标字符的代价
            if (str1[right] !== String.fromCharCode(97 + target)) {
                cost += str2[right] === '1' ? 1 : Infinity; // 可修改则消耗1次，不可修改则禁止
            }
            
            // 维护窗口有效性：当成本超过m时收缩左边界
            while (cost > m) {
                if (str1[left] !== String.fromCharCode(97 + target)) {
                    cost -= str2[left] === '1' ? 1 : Infinity;
                }
                left++;
            }
            
            // 更新最大长度
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }
    
    return maxLen;
}

function main() {
    // Add your test cases here
    
    console.log(solution(5, 2, "abcda", "01110") === 3);
    console.log(solution(7, 2, "abbaccb", "1001001") === 4);
    console.log(solution(3, 0, "aab", "101") === 2);
}

main();
