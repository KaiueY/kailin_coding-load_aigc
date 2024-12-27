/**
 * @description 125. 验证回文串
 * @param {string} s
 * @return {boolean}
 * 
 * 题目描述:
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，
 * 短语正着读和反着读都一样,则可以认为该短语是一个回文串。
 * 字母和数字都属于字母数字字符。
 * 
 * 示例:
 * 输入: s = "A man, a plan, a canal: Panama"
 * 输出: true
 * 解释: "amanaplanacanalpanama" 是回文串
 * 
 * 输入: s = "race a car" 
 * 输出: false
 * 解释: "raceacar" 不是回文串
 */

var isPalindrome = function(s) {
    //将所有大写字符转换为小写字符
    s = s.toLowerCase();
    //  移除所有非字母数字字符
    let result = '';
    for (let char of s) {
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            result += char;
        }
    }
    s = result;
    //  判断是否是回文串
    return s === s.split('').reverse().join('');
};