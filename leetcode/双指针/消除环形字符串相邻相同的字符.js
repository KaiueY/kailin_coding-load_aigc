function maxDeletions(s) {
    let n = s.length;
    let stack = [];
    
    // 遍历字符串进行模拟消除
    for (let i = 0; i < n; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop(); // 相邻字符相同，消除
        } else {
            stack.push(s[i]);
        }
    }

    // 栈中剩余的字符
    let remaining = stack.length;
    
    // 由于字符串是首尾相连的，还要检查首尾是否可合并
    if (remaining > 1 && stack[0] === stack[remaining - 1]) {
        let l = 0, r = remaining - 1;
        while (l < r && stack[l] === stack[r]) {
            l++;
            r--;
        }
        remaining = r - l + 1;
    }

    return n - remaining;
}

// 测试用例
console.log(maxDeletions("acbaqq")); // 4
console.log(maxDeletions("abba"));  // 4
console.log(maxDeletions("abcba")); // 4