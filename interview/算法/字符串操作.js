/**
 * @param {string} str
 */
function solution(str) {
    function repeat(times, str) {
        return str.repeat(times);
    }

    let numStack = [];
    let strStack = [];
    let word = '';
    let i = 0;

    while (i < str.length) {
        const char = str[i];

        // 处理多位数字
        if (/\d/.test(char)) {
            let num = '';
            while (i < str.length && /\d/.test(str[i])) {
                num += str[i++];
            }
            numStack.push(Number(num));
            continue;
        }

        // 遇到左括号，保存当前 word，并重置
        if (char === '{') {
            strStack.push(word);
            word = '';
            i++;
        } 
        // 遇到右括号，开始拼接
        else if (char === '}') {
            const prev = strStack.pop();
            const times = numStack.pop();
            word = prev + repeat(times, word);
            i++;
        } 
        // 普通字符
        else {
            word += char;
            i++;
        }
    }

    return word;
}

console.log(solution('3{x}2{yc}')); // 输出: xxxycyc