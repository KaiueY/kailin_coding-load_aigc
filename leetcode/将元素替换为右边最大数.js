// https://leetcode.cn/problems/replace-elements-with-greatest-element-on-right-side/?envType=daily-question&envId=2025-02-16

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(arr.length<=1)
        return [-1]
    const len = arr.length
    let maxRight = arr[len-1]

    for(let i=len-2;i>=0;i--){
        let temp = arr[i]
        arr[i] = maxRight
        maxRight = Math.max(temp,maxRight)
    }
    arr[len-1] = -1
    return arr
};