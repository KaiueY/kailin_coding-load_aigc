/**
 * 问题描述
 * 给定一个字符串 s，该字符串中只包含英文大小写字母。你需要计算从字符串中最多能组成多少个字符串 "ku"。
 * 每次可以随机从字符串中选一个字符，并且选中的字符不能再使用。字符串中的字符大小写可以忽略，即大写和小写字母视为相同。
 *
 * 例如，输入 "AUBTMKAxfuu"，从中最多能组成 1 个 "ku"。
 * 测试样例
 * 样例1：
 *
 * 输入：s = "AUBTMKAxfuu"
 * 输出：1
 */
function solution(s) {
    s = s.toLowerCase();
    
    let countK = 0;
    let countU = 0;
    
    for (let char of s) {
        if (char === 'k') {
            countK++;
        } else if (char === 'u') {
            countU++;
        }
    }
    
    return Math.min(countK, countU);
}

function main() {
    console.log(solution("AUBTMKAxfuu") === 1);
    console.log(solution("KKuuUuUuKKKKkkkkKK") === 6);
    console.log(solution("abcdefgh") === 0);
}

main();