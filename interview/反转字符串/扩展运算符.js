/**
 * 
 * @param {string} s 
 * @returns {string}
 */
var reverseString = function(s) {
    return [...s].reverse().join('');
};
console.log(reverseString('hello'));
