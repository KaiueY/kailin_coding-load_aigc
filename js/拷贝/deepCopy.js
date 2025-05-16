let obj = {
    a: 1,
    b: { n: 2 },
    c: [1, 2, 3]
}
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    let newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
                newObj[key] = deepCopy(obj[key])
        }
    }
    return newObj
}
let obj2 = deepCopy(obj)
obj.b.n = 6
obj.c[0] = 6
obj.c.push(9)
console.log(obj);

console.log(obj2);//不受影响
