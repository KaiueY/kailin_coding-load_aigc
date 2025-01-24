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
    let left = 0;
    const charCount = new Array(26).fill(0); // 用于统计窗口内每个字符的出现次数
    let maxCharCount = 0; // 窗口内出现次数最多的字符的次数

    for (let right = 0; right < n; right++) {
        const currentChar = str1[right];
        const canModify = str2[right] === '1';

        // 如果当前字符可以修改，则将其视为任意字符
        if (canModify) {
            maxCharCount = Math.max(maxCharCount, ++charCount[0]); // 假设修改为'a'
        } else {
            const charIndex = currentChar.charCodeAt(0) - 'a'.charCodeAt(0);
            maxCharCount = Math.max(maxCharCount, ++charCount[charIndex]);
        }

        // 如果窗口内的字符需要修复的次数超过m，则移动左边界
        while (right - left + 1 - maxCharCount > m) {
            const leftChar = str1[left];
            const canModifyLeft = str2[left] === '1';

            if (canModifyLeft) {
                charCount[0]--;
            } else {
                const leftCharIndex = leftChar.charCodeAt(0) - 'a'.charCodeAt(0);
                charCount[leftCharIndex]--;
            }

            left++;
            // 重新计算maxCharCount
            maxCharCount = Math.max(...charCount);
        }

        // 更新最大长度
        maxLen = Math.max(maxLen, right - left + 1);
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
