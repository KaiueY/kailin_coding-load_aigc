function pairingCheck(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let char of str) {
        if (char in brackets) {
            // 左括号入栈
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            // 右括号：检查栈顶是否匹配
            const last = stack.pop();
            if (brackets[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
//   
// 示例用法
console.log(pairingCheck('()[]{}')); // true
console.log(pairingCheck('([)]'));   // false