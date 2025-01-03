/**
 * 小M有一个坏掉的计算器，它有两种功能可以操作屏幕上显示的数字：
 * 
 * 1. 将显示的数字乘以2；
 * 2. 将显示的数字减去1。
 * 
 * 现在，计算器上显示的数字是 x，小M希望通过最少的操作次数，将数字变为 y。
 * 
 * 请你帮忙计算一下，最少需要多少次操作才能将数字从 x 变为 y。
 */

function solution(x, y) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    let result = 0
    while(y>0){
        if(y%2==0 && x<y/2){
            y /= 2
        }else{
            y += 1
        }
        result++
        if(y==x)return result
    }

}

function main() {
    console.log(solution(2, 3) === 2 ? 1 : 0);
    console.log(solution(4, 7) === 2 ? 1 : 0);
    console.log(solution(3, 66) === 9 ? 1 : 0);
}

main();