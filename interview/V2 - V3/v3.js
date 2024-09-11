
function isObject(val) {
    return typeof val ==='object' && val != null
}
function reactive(target){
    return createReactive(target)
}
function createReactive(target){
    if(!isObject(target)){
        return target

    }
    let proxy = toProxy.get(target)
    if(proxy){
        return proxy
    }
    if(toRow.has(target)){
        return  target
    }

    let observed = new Proxy(target, baseHandle)
    toProxy.set(target, observed)
    toRow.add(observed,target)
    return observed
}


let toProxy = new WeakMap() // 原对象:代理对象 
let toRow = new WeakSet() // 代理对象 : 原对象



let baseHandle = {
    get(target , key , receive){
        // return target[key]
        
        let result = Reflect.get(target, key, receive)
        console.log(key,'you are getting a value');//result == target[key]
        
        // return result
        return isObject(result)? reactive(result):result //如果是对象，递归代理
    },
    set(target, key, value, receive){
         
        console.log(receive,`${key} has been changed`);
        return Reflect.set(target,key ,value,receive)

    },
}

let obj = {
    a:1,
    b:2,
    c:{
        n:3
    },
    d:[5,6,7]
}
let proxy = reactive(obj)
// proxy.d[0] = 1
proxy.d.push(8)
console.log(proxy.d);
