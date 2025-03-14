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

//再次手写一次
var minWindow = function(s, t) {

    let left = 0, right = 0; // 滑动窗口左右边界
    let tMap = new Map(); // 存储 t 中字符的频率
    let minLen = Infinity, start = 0; // 最小窗口的长度 & 起始索引
    let count = 0; // 记录匹配字符的数量
    
    // 统计 t 中字符频率
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }
    let map = structuredClone(tMap)// 拷贝 tMap

    while (right < s.length) {
        let char = s[right];
        if (map.has(char)) {
            if (map.get(char) > 0) count++; // 统计匹配到的字符数
            map.set(char, map.get(char) - 1);
        }
        right++; // 移动右指针扩展窗口

        // 当窗口已经包含 t 中所有字符，开始缩小窗口
        while (count === t.length) {
            if (right - left < minLen) {
                minLen = right - left;
                start = left;
            }

            let leftChar = s[left];
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) count--; // 有效匹配减少
            }
            left++; // 移动左指针收缩窗口
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
        
};