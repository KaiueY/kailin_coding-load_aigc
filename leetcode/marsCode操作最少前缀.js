/**
 * 问题描述:
 * 小U和小R有两个字符串，分别是 S 和 T，现在小U需要通过对 S 进行若干次操作，使其变成 T 的一个前缀。
 * 操作可以是修改 S 的某一个字符，或者删除 S 末尾的字符。现在你需要帮助小U计算出，最少需要多少次操作才能让 S 变成 T 的前缀。
 *
 * 测试样例:
 * 样例1：
 * 输入：S = "aba", T = "abb"
 * 输出：1
 */
function solution(S, T) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    let result = 0
    let lenS = S.length 
    let lenT  = T.length
    let i = 0
    for(;i<lenS&&i<lenT;i++){
        if(S[i]!==T[i]){
            result++
        }
    }
    if(i==lenT)result += lenS-lenT
    return result
}

function main() {
    console.log(solution("aba", "abb") === 1);
    console.log(solution("abcd", "efg") === 4);
    console.log(solution("xyz", "xy") === 1);
    console.log(solution("hello", "helloworld") === 0);
    console.log(solution("same", "same") === 0);
}

main();