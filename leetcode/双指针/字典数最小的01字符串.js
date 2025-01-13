// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560665370668

/**
 * @param {number} n
 * @param {number} k
 * @param {string} s
 */
function solution(n, k, s) {
    // 将字符串转为数组
    s = s.split('');

    let currentIndex = s.indexOf('1'); // 第一个 '1' 的位置
    let currenZero = s.indexOf('0', currentIndex); // 第一个 '0' 的位置

    if (currentIndex === -1 || currenZero === -1) {
        // 如果没有 '1' 或没有 '0'，直接返回原字符串
        return s.join('');
    }

    while (currenZero !== -1 && k > 0) {
        let step = currenZero - currentIndex;

        if (step > k) {
            // 如果剩余操作数不足以完全交换，将 '0' 向前移动 k 步
            s[currenZero] = '1';
            s[currenZero - k] = '0';
            k = 0; // 操作数用尽
            break
        } else {
            // 剩余操作数足够，将 '0' 移动到当前目标位置
            s[currenZero] = '1';
            s[currentIndex] = '0';
            k -= step; // 减少剩余操作数
        }

        // 更新下一步要处理的位置
        currentIndex++;
        currenZero = s.indexOf('0', currentIndex); // 查找下一个 '0'
    }

    return s.join('');
}

// function main() {
//     console.log(solution(5, 2, "01010") === "00101");
//     console.log(solution(7, 3, "1101001") === "0110101");
//     console.log(solution(4, 1, "1001") === "0101");
// }

// main();
console.log(solution(5, 2, "0"));