// https://leetcode.cn/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result= ''
    for(let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== char) {
                return result
            }
        }
        result += char
    }  
    return result
};