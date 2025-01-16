function solution(str) {
    while (str.length > 1) {
        
        let len = str.length;

        let mid = len%2 == 0? len /2 :Math.ceil(len/2)// 起点为长度的一半
        let found = false;
        console.log(mid);
        
        // 从一半开始遍历，直到倒数第一个字符
        for (let i = mid; i < len; i++) {
            let str1 = str.slice(0, i);     // 前一半
            let str2 = str.slice(i, len); 
            console.log(str);
             // 后一半
            console.log(str1,' -- ',str2);
            
            if (str1.endsWith(str2)) {
                str = str1;  // 更新为前一半
                found = true;
                break;       // 从新字符串的中间继续
            }
        }

        if (!found) break; // 如果当前字符串无法进一步划分，则终止
    }
    return str;
}

function main() {
    // Add your test cases here
    // console.log(solution("abbabbbabb") === "ab");
    console.log(solution("abbbabbbb") === "ab");
    // console.log(solution("jiabanbananananiabanbananananbananananiabanbananananbananananbananananbanananan") === "jiaban");
    // console.log(solution("selectecttectelectecttectcttectselectecttectelectecttectcttectectelectecttectcttectectcttectectcttectectcttect") === "select");
    // console.log(solution("discussssscussssiscussssscussssdiscussssscussssiscussssscussssiscussssscussss") === "discus");
}

main();
