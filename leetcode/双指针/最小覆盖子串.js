// https://leetcode.cn/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let origin = new Map(), count = new Map();

// 记录 t 中的字符及其出现次数
for (let c of t) {
    origin.set(c, (origin.get(c) || 0) + 1);
}

let l = 0, r = 0; 
let len = Infinity, ansL = -1, ansR = -1;

while (r < s.length) {
    // 右指针扩展窗口
    let charR = s[r];
    if (origin.has(charR)) {
        count.set(charR, (count.get(charR) || 0) + 1);
    }
    r++;

    // 收缩窗口
    while (check(origin, count) && l < r) {
        if (r - l < len) {
            len = r - l;
            ansL = l;
            ansR = r;
        }
        let charL = s[l];
        if (origin.has(charL)) {
            count.set(charL, (count.get(charL) || 0) - 1);
        }
        l++;
    }
}
return ansL === -1 ? "" : s.substring(ansL, ansR);
};

// 检查窗口是否满足条件
function check(origin, count) {
for (let [key, val] of origin) {
    if ((count.get(key) || 0) < val) {
        return false;
    }
}
return true;
};