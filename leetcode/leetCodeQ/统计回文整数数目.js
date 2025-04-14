var countGoodIntegers = function(n, k) {
    const dict = new Set(); // 存储合法回文数的“排序位数字符串”
    const base = Math.pow(10, Math.floor((n - 1) / 2)); // 起始前缀
    const skip = n % 2; // 是否是奇数位长度，控制回文拼接方式

    // 枚举所有 n 位的回文数
    for (let i = base; i < base * 10; i++) {
        let s = i.toString();
        let reversed = s.split('').reverse().join('');
        if (skip) {
            s += reversed.slice(1); // 奇数位：中间数字只保留一次
        } else {
            s += reversed; // 偶数位：直接反转
        }

        const num = parseInt(s);
        if (num % k === 0) {
            dict.add(s.split('').sort().join('')); // 记录“组成数字”
        }
    }

    // 预计算阶乘
    const factorial = Array(n + 1).fill(1n);
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * BigInt(i);
    }

    // 用排列组合公式统计所有合法排列
    let total = 0n;
    for (const s of dict) {
        const count = Array(10).fill(0);
        for (const char of s) {
            count[parseInt(char)]++;
        }

        let sum = 0n;
        for (let firstDigit = 1; firstDigit <= 9; firstDigit++) {
            if (count[firstDigit] === 0) continue;

            count[firstDigit]--;
            let perm = factorial[n - 1];
            for (const x of count) {
                perm /= factorial[x];
            }
            sum += perm;
            count[firstDigit]++;
        }

        total += sum;
    }

    return Number(total);
}