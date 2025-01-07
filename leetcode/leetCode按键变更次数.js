/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let result = 0
    for(let i =1;i<s.length;i++){
        console.log(i);
        
        console.log(s[i].toLowerCase(),s[i-1].toLowerCase());
        
        if(s[i].toLowerCase() !== s[i-1].toLowerCase()){
            result++
        }
    }
    return result
};
console.log( countKeyChanges('aAbBcC'));
