/**
 * 
 * @param {string} s 
 * @returns {string}
 */
var reverseString = function(s) {
    if(s!=='') {
         return reverseString(s.substring(1)) + s.charAt(0)
    }else {
        return ''
    }
};
console.log(reverseString('hello'));
