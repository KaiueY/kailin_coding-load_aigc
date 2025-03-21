/**
 * 
 * @param {string} s 
 * @returns {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('')
};
console.log(reverseString('hello'));
