

/**
 * 找到当前股票需要等待多少天会上涨
 * 主函数使用不同的测试用例测试 solution 函数。
 * 它会记录 solution 函数的输出是否与预期输出匹配。
 * 
 * 测试用例:
 * 1. solution(5, [33, 34, 14, 12, 16]) 应返回 [1, 0, 2, 1, 0]
 * 2. solution(6, [45, 44, 46, 43, 42, 48]) 应返回 [2, 1, 3, 2, 1, 0]
 * 3. solution(3, [10, 9, 8]) 应返回 [0, 0, 0]
 */
function solution(N, stockPrices) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    const result = [];
    
    return new Array(N).fill(0);
}

function main() {
    console.log(JSON.stringify(solution(5, [33, 34, 14, 12, 16])) === JSON.stringify([1, 0, 2, 1, 0]));
    console.log(JSON.stringify(solution(6, [45, 44, 46, 43, 42, 48])) === JSON.stringify([2, 1, 3, 2, 1, 0]));
    console.log(JSON.stringify(solution(3, [10, 9, 8])) === JSON.stringify([0, 0, 0]));
}

main();