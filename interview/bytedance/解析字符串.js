// 字符串展开   
// 给定如下字符串，请你转化成符合相应规则的字符串，以`[]`为分界线。
// 如: 2[ 2 [ a 1[ b ] ] ] => abababab
//     3[ 2[a] 2[c 1[ b] ] ] => aacbcbaacbcbaacbcb
function expandString(str) {
    const stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of str) {
        if (char >= '0' && char <= '9') {
            // 如果是数字，累积起来形成重复次数
            currentNum = currentNum * 10 + parseInt(char, 10);
        } else if (char === '[') {
            // 遇到左括号，将当前累积的数字和字符串压入栈中
            stack.push(currentNum);
            stack.push(currentStr);
            // 重置当前累积的数字和字符串
            currentNum = 0;
            currentStr = '';
        } else if (char === ']') {
            // 遇到右括号，从栈中取出上一个字符串和重复次数
            let prevStr = stack.pop();
            let num = stack.pop();
            // 将当前字符串重复指定次数后拼接到前一个字符串后面
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            // 普通字符直接添加到当前字符串
            currentStr += char;
        }
    }

    return currentStr;
}

// 测试例子
console.log(expandString("2[ 2 [ a 1[ b ] ] ]"));  // 应输出 "abababab"
console.log(expandString("3 [ 2[a] 2[c 1[ b] ] ]"));  // 应输出 "aaccbbcbaaccbbcbaaccbcbb"

