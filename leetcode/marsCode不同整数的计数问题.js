// 问题描述
// 小R有一个字符串 word，该字符串由数字和小写英文字母组成。小R想用空格替换每一个不是数字的字符。
// 然后，他希望统计在替换后剩下的整数中，不同整数的数目。

// 例如，给定字符串 "a123bc34d8ef34"，替换后形成的字符串是 " 123 34 8 34"，剩下的整数是 "123"、"34"、"8" 和 "34"。
// 不同的整数有三个，即 "123"、"34" 和 "8"。

// 注意，只有当两个整数的不含前导零的十进制表示不同，才认为它们是不同的整数。

// 测试样例
// 样例1：

// 输入：word = "a123bc34d8ef34"
// 输出：3


function solution(word) {
    const set = new Set()
     let number = ''
    for(let i = 0;i<word.length;i++){
        if(word[i]>='a'&&word[i]<='z'){
            if(number.length){
                set.add(Number(number))
                number = ''
            }
            continue
        }else{
            number += word[i]
        }
    }
    if(number.length){
        set.add(Number(number))
    }
    return set.size
}

function main() {
    console.log(solution("a123bc34d8ef34") === 3);
    console.log(solution("t1234c23456") === 2);
    console.log(solution("a1b01c001d4") === 2);
}

main();