// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestContinuousSubstring = function(s) {
//     let maxlen = 1
//     let str = 'abcdefghijklmnopqrstuvwxyz'
//     for(let i= 0,j=1;j<s.length;){
//         if(str.includes(s.slice(1,j+1))){
//             j++
//             maxlen = Math.max(maxlen,j-i+1)
//         }
//         else{
//             i =  s.indexOf(s[j])
//             j++
//         }
//     }
//     return maxlen
// };

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    let maxlen = 1;
    let currentLen = 1; // 当前连续递增子串的长度

    for (let i = 1; i < s.length; i++) {
        // 如果当前字符和前一个字符是连续的递增字母
        if (s.charCodeAt(i) === s.charCodeAt(i - 1) + 1) {
            currentLen++;
            maxlen = Math.max(maxlen, currentLen); // 更新最大长度
        } else {
            currentLen = 1; // 重置当前子串长度
        }
    }
    
    return maxlen;
};
