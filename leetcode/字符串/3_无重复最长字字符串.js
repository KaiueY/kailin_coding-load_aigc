/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let len = s.length;
    let maxlen = 0; 
    let str = [...s];
    for (let i = 0, j = 0; j < len; j++) {
        let subStr = str.slice(i, j);
        if (subStr.indexOf(str[j]) !== -1) {
            i += subStr.indexOf(str[j]) + 1;
        }
        maxlen = Math.max(maxlen, j - i + 1);
    }
    return maxlen;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); 


// var lengthOfLongestSubstring = function(s) {
//     let left = 0;
//     let right = 0;
//     const set = new Set();
//     let n = s.length;
//     let res = 0;

//     while (right < n) {
//         if (!set.has(s.charAt(right))) {
//             set.add(s.charAt(right));
//             right++;
//             res = Math.max(res, right - left);
//         } else {
//             set.delete(s.charAt(left));
//             left++;
//         }
//     }

//     return res;
// };

// let s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s)); 