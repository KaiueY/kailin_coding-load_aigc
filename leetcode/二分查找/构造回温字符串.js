// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424436653623181356
function solution(s) {
    const n = s.length;
    const t = s.split('');
    
    // 先构造一个回文串
    for (let i = 0; i < Math.floor(n / 2); i++) {
        t[n - 1 - i] = t[i];
    }
    
    // 如果构造的回文串已经小于原字符串，直接返回
    if (t.join('') < s) {
        return t.join('');
    }
    
    // 从中间向左寻找第一个可以减小的字符
    let mid = Math.floor((n - 1) / 2);
    
    while (mid >= 0) {
        // 如果当前位置不是'a'，可以尝试减小
        if (t[mid] > 'a') {
            // 保存原始值以便回溯
            const original = t[mid];
            // 减小当前位置的字符
            t[mid] = String.fromCharCode(t[mid].charCodeAt(0) - 1);
            // 同时更新对称位置
            if (mid !== n - 1 - mid) {
                t[n - 1 - mid] = t[mid];
            }
            
            // 将mid右边的所有位置（除了对称位）都设为'z'
            for (let i = mid + 1; i <= Math.floor((n - 1) / 2); i++) {
                t[i] = 'z';
                if (i !== n - 1 - i) {
                    t[n - 1 - i] = 'z';
                }
            }
            
            // 检查是否满足条件
            if (t.join('') < s) {
                return t.join('');
            }
            
            // 不满足条件，恢复当前位置并继续向左查找
            t[mid] = original;
            if (mid !== n - 1 - mid) {
                t[n - 1 - mid] = original;
            }
        }
        mid--;
    }
    
    // 如果所有位置都是'a'或无法构造更小的回文串
    return "-1";
}

function main() {
    console.log(solution("abc") === "aba");
    console.log(solution("cba") === "cac");
    console.log(solution("aaa") === "-1");
}

main();