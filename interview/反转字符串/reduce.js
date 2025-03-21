/**
 * 
 * @param {string} s 
 * @returns {string}
 */
var reverseString = function(s) {
     return s.split('').reduce((pre,cur)=>{
        console.log({pre,cur});
        
        return cur + pre
    },'')
};
console.log(reverseString('hello'));
