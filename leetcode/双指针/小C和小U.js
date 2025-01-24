// 问题描述
// 小C和小U一直相互喜欢着，今天他们终于有机会表达对彼此的心意。

// 小C有三个区间：[l_1, r_1], [l_2, r_2], 和 [l_3, r_3]。小C和小U将分别从这些区间中选择一个自己最喜欢的区间，但这两个区间不能相同。

// 接着，他们会在自己喜欢的区间内选择一个数，并且这个数还要能够在对方的区间内找到。为了讨对方欢心，他们希望选择的两个数的和尽可能大。

// 你的任务是帮助小C和小U找到这两个数的和的最大值。如果不存在这样的两个数，输出 -1。

function solution(l1, r1, l2, r2, l3, r3) {
    function computeMaxOverlap(la, ra, lb, rb) {
        const start = Math.max(la, lb);
        const end = Math.min(ra, rb);
        return start <= end ? end : -1;
    }

    let maxSum = -1;

    // 检查所有可能的区间对组合
    const ab = computeMaxOverlap(l1, r1, l2, r2);
    if (ab !== -1) {
        maxSum = Math.max(maxSum, ab * 2);
    }

    const ac = computeMaxOverlap(l1, r1, l3, r3);
    if (ac !== -1) {
        maxSum = Math.max(maxSum, ac * 2);
    }

    const bc = computeMaxOverlap(l2, r2, l3, r3);
    if (bc !== -1) {
        maxSum = Math.max(maxSum, bc * 2);
    }

    return maxSum !== -1 ? maxSum : -1;
}

function main() {
    console.log(solution(1, 3, 2, 4, 4, 6) === 8);
    console.log(solution(1, 2, 2, 3, 3, 4) === 6);
    console.log(solution(10, 20, 15, 25, 30, 40) === 40);
}

main();