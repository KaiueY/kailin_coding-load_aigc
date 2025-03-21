
var reverseString = function(s) {
    let res = ''
    for(let i = s.length - 1; i >= 0; i--) {
        res += s[i]
    }
    return res    
};