const obj = {
    a:1,
    b:[1,2,{c:true},[3]],
    d:{e:2,f:3},
    g:null
}
const flattenRes = flattenObj(obj)
function flattenObj(obj) {
    let res = {}
    const helper = (target) =>{
        for(let key in target){
        if(target[key]===undefined || target[key]===null)continue  
          
        } 
    }
    helper(obj)


    return res
}

console.log();
