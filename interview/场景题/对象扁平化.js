const obj = {
    a:1,
    b:[1,2,{c:true},[3]],
    d:{e:2,f:3},
    g:null
}
let flattenRes = flattenObj(obj)
function flattenObj(obj) {
    let res = {}
    function helper(obj,oldKey=''){
        // 对
        for(let key in obj){
            let nKey 
            if(oldKey){
                if(Array.isArray(obj)){
                    nKey = `${oldKey}[${key}]`
                }
                else {
                    nKey = `${oldKey}.${key}`
                }
            }
            else{
                nKey = key
            }

            if(Array.isArray(obj[key])||Object.prototype.toString.call(obj[key]) === '[object Object]'){
                // 对象
                helper(obj[key],nKey)
            }
            else if(obj[key]!==null&obj[key]!==undefined){
                res[nKey] = obj[key]
            }
        }
    }

    helper(obj,)
    return res
}


console.log(flattenRes);
