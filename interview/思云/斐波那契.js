
// 递归
// function fib(n){
//     if(n==0 || n==1 ) return 1 
//     return fib(n-1) + fib(n-2)
// }
// 自顶向下思考 退出条件 递归的公式
// 重复计算 爆栈

// 换一种思想 自低向上 推导  迭代推导  动态规划

function fibonacci(n) {
    if (n <= 1) return n;
    let fib = [0, 1];
    for (let index = 2; index <= n; index++) {
        fib[index] = fib[index - 1] + fib[index - 2];
    }
    return fib[n];
}