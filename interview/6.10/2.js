// add(1)(2)(3)(4)() 输出10


function bar (fn,){
    let paramsLen = fn.length 
    let params = []
    if(paramsLen){
        params.push()
        return function (fn,...args){
            params.push(...args)
            return fn
        }
    }else{
        return params.reduce((cur,pre)=>cur+pre,0)
    }
}


const add = fn()