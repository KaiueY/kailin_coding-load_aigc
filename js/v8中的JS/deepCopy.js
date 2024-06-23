let obj = {
    a: 1,
    b: { n: 2 }
}
function deepCopy(obj) {
    let newObj = {}
    // 深拷贝和浅拷贝的区别就是不能受到原对象的影响，所以不能有原对象的引用地址
    //找到key的最终原始类型 如object.b.n
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {//规避隐式原型属性
            //判断是不是对象
            if (obj[key] instanceof Object) {
                //typeof obj[key]==='object' && obj[key]!==bull
                newObj[key] = deepCopy(obj[key])
            }
            else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}
let obj2 = deepCopy(obj)
obj.b.n = 6
console.log(obj2);//不受影响
