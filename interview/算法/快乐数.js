/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return bool布尔型
 */
function happynum( n ) {
    // write code here
    function transform( num ){
        let strNum = ''+num
        let sum = strNum.split('').reduce((per,cur)=>{
            return per + (+cur) **2
        },0)
        return sum
    }
    const set = new Set()
    while(1){
        if(n === 1){
            return true
         }
        set.add(n)
         n = transform(n)
       
         if(set.has(n)){
            return false
         }
    }
}
console.log(happynum(123));

