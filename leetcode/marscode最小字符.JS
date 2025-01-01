// 小U得到一个只包含小写字母的字符串 S。她可以执行如下操作：每次选择字符串中两个相同的字符删除，然后在字符串末尾添加一个任意的小写字母。小U想知道，最少需要多少次操作才能使得字符串中的所有字母都不相同？



function solution(S) {
    let freq = {};
    for (let char of S) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    let operations = 0;
    
    // 遍历字符频率，计算每个字符需要操作的次数
    for (let count of Object.values(freq)) {
        if (count > 1) {
            // 如果字符的数量大于1，每次可以删除两个字符
            operations += Math.floor(count / 2);
        }
    }
    
    return operations;
}

function main() {
    console.log(solution("abab") === 2);
    console.log(solution("aaaa") === 2);
    console.log(solution("abcabc") === 3);
}

main();