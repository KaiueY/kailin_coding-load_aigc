// http://marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560665403436
function solution(s) {
    const n = s.length;
    const target = "chhc";
    let chhcPositions = [];

    // 预处理：找到所有"chhc"的起始位置
    for (let i = 0; i <= n - target.length; i++) {
        if (s.substring(i, i + target.length) === target) {
            chhcPositions.push(i);
        }
    }

    let totalWeight = 0;
    // 遍历所有子串
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // 统计当前子串 [i, j] 内部包含多少个"chhc"
            totalWeight += chhcPositions.filter(pos => pos >= i && pos + 3 <= j).length;
        }
    }
    
    return totalWeight;
}

function main() {
    console.log(solution("chhchhc") === 8);
    console.log(solution("chhcchhcchhc") === 43);
    console.log(solution("hhhh") === 0);
}

main();