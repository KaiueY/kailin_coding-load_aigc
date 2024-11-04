// 将字符串 'a,b,c' 转换为对象 {a: {b: {c: null }}}
/**
 * @param {string} str
 * @return {object}
 * @description 编写一个函数，将字符串 'a,b,c' 转换为对象 {a: {b: {c: null }}}
 */
const str  = 'a,b,c'
const transform = (str) =>{
    const arr = str.split(',')
    
    const obj = arr.reverse().reduce((current,key)=>{
        return {[key]:current}
    },null)
    console.log(obj);
}
transform(str)