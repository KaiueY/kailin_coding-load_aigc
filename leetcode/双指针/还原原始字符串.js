
function solution(str1) {
    for (let len = 1; len <= str1.length; len++) {
        let S = str1.substring(0, len);
        let current = S;
        
        while (current.length < str1.length) {
            for (let K = 0; K < current.length; K++) {
                let newStr = current + current.substring(K);
                if (str1.startsWith(newStr)) {
                    current = newStr;
                    break;
                }
            }
            if (current.length >= str1.length) break;
        }
        
        if (current === str1) {
            return S;
        }
    }
    
    return str1;
}

function main() {
    // Add your test cases here
    console.log(solution("abbabbbabb") === "ab");
    console.log(solution("abbbabbbb") === "ab");
    console.log(solution("jiabanbananananiabanbananananbananananiabanbananananbananananbananananbanananan") === "jiaban");
    console.log(solution("selectecttectelectecttectcttectselectecttectelectecttectcttectectelectecttectcttectectcttectectcttectectcttect") === "select");
    console.log(solution("discussssscussssiscussssscussssdiscussssscussssiscussssscussssiscussssscussss") === "discus");
}

main();
