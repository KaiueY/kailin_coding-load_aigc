// https://leetcode.cn/problems/the-number-of-weak-characters-in-the-game/
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    if (!properties || properties.length < 2) {
        return 0;
    }
    let result  = []
    const sorted = [...properties].sort((a,b)=>{
        return a[0] == b[0]? a[1]-b[1] : b[0]-a[0]
    })
    let maxDefense = -Infinity
    console.log('---',sorted);
    
    for(let actor of sorted){
        console.log(actor[0],actor[1]);
        
        if(actor[1]<maxDefense) {
            result.push({attact:actor[0],defense:actor[1]})
        }
        else{
            maxDefense = Math.max(actor[1],maxDefense)
        }
    }
    return result.length
};
console.log( numberOfWeakCharacters([[1,5],[10,4],[4,3]]));
