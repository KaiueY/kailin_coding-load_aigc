const toProxy = new WeakMap()
const toRow = new WeakSet()


const isObject = (target) => {
    return typeof target == 'object' && target != null
}
const handler = {

    get(target, key, receiver) {
        console.log('get',target[key]);
        let reult = Reflect.get(target, key, receiver)
        return isObject(reult) ? reactive(reult) : reult
    },
    set(target, key, value, receiver) {
        console.log('set',value);
        updateView()
        return Reflect.set(target, key, value, receiver)
    }
}

const updateView = () => {
    console.log('updateView');
}


const createReactiveObject = (target) => {
    if (!isObject(target)) {
        return target
    }
    if(toProxy.has(target)){
        return toProxy.get(target)
    }
    if(toRow.has(target)){
        return target
    }
    let proxied = new Proxy(target, handler)
    toProxy.set(target,proxied)
    toRow.add(target)
    return proxied
}

const reactive = (target) => {
    return createReactiveObject(target)
}




const data = {
    a: 1,
    b: {
        e: 2,
        f: 3
    },
    c: [1, 2, 3]
}

const proxy = reactive(data)
// proxy.a = 100
// proxy.b.e = 200
console.log(proxy.b.e);
// proxy.c.push(4,5,6)
// console.log(proxy.c);
