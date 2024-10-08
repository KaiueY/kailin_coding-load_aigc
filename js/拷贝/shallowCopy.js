function shallowCopy(obj) {
    let newObj = {}
    // 如果对象隐式原型有很多属性，往往都是不必要的 我们应该想办法忽略

    for (let key in obj) {
        // if (obj.hasOwnProperty(key)) {
        //     newObj[key] = obj[key]
        // }
        if (Object.hasOwn(obj,key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

let obj = {
    a: 1,
    b: { n: 2 }
}
let newObj = shallowCopy(obj)
obj.a=2
obj.b.n = 4
console.log(newObj);//{ a: 1, b: { n: 4 } }