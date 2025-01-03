/**
 * 问题描述:
 * 小C希望构造一个包含n个元素的数组，且满足以下条件：
 * 
 * 1. 数组中的所有元素两两不同。
 * 2. 数组所有元素的最大公约数为 k。
 * 3. 数组元素之和尽可能小。
 * 
 * 任务是输出该数组元素之和的最小值。
 */


function solution(n, k) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    
    let result = 0
    for(let i = 1 ;i<=n;i++){
        result += (i*k)
    }
    return result 
}

function main() {
    console.log(solution(3, 1) === 6);
    console.log(solution(2, 2) === 6);
    console.log(solution(4, 3) === 30);
}

main();