// https://leetcode.cn/problems/largest-3-same-digit-number-in-string/
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let result = -1
    let count =1
    for(let i =1;i<num.length;i++){
        num[i] === num[i-1]?count ++:count = 1
        if(count == 3){
            result = Math.max(result,Number(num[i]))
        }
    }
    return result !==-1 ? `${result}${result}${result}` : ''
};
console.log(largestGoodInteger("6777133339"));

