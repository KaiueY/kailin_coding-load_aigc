// 依赖收集类
class Dep {
    constructor() {
        this.subscribers = new Set()
    }
    depend() {
        if (activeEffect) {
            this.subscribers.add(activeEffect)
        }
    }
    notify() {
        this.subscribers.forEach(effect => effect())
    }
}

let activeEffect = null
function watchEffect(effect) {
    activeEffect = effect
    effect()
    activeEffect = null
}

// 数组方法重写
const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

methodsToPatch.forEach((method) => {
    arrayMethods[method] = function(...args) {
        const result = arrayProto[method].apply(this, args)
        const ob = this.__ob__
        let inserted
        switch(method) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        if (inserted) ob.observeArray(inserted)
        ob.dep.notify()
        return result
    }
})

// 观察者类
class Observer {
    constructor(value) {
        this.value = value
        this.dep = new Dep()
        
        def(value, '__ob__', this)
        
        if (Array.isArray(value)) {
            value.__proto__ = arrayMethods
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }
    
    walk(obj) {
        Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
    }
    
    observeArray(items) {
        items.forEach(item => observer(item))
    }
}

// 工具函数
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

function isObject(val) {
    return val !== null && typeof val === 'object'
}

function isValidArrayIndex(val) {
    const n = parseFloat(String(val))
    return n >= 0 && Math.floor(n) === n && isFinite(val)
}

// 主要的观察者函数
function observer(value) {
    if (!isObject(value)) return
    
    if (value.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer) {
        return value.__ob__
    }
    
    return new Observer(value)
}

// 定义响应式属性
function defineReactive(target, key, value) {
    const dep = new Dep()
    let childOb = observer(value)
    
    Object.defineProperty(target, key, {
        get() {
            dep.depend()
            if (childOb) {
                childOb.dep.depend()
                if (Array.isArray(value)) {
                    dependArray(value)
                }
            }
            return value
        },
        set(newValue) {
            if (newValue === value) return
            value = newValue
            childOb = observer(newValue)
            dep.notify()
        }
    })
}

function dependArray(array) {
    for (let e of array) {
        e && e.__ob__ && e.__ob__.dep.depend()
        if (Array.isArray(e)) {
            dependArray(e)
        }
    }
}

// 更新视图的函数（模拟）
function updateView() {
    console.log('视图已更新')
}

// // 使用示例
// const data = {
//     name: 'kailin',
//     hobby: 'coding',
//     country: 'china',
//     schools: ['pku', 'tsinghua']
// }

// observer(data)

// watchEffect(() => {
//     console.log(`Name: ${data.name}`)
//     console.log(`Hobby: ${data.hobby}`)
//     console.log(`Country: ${data.country}`)
//     console.log(`Schools: ${data.schools.join(', ')}`)
//     updateView()
// })

// // 测试
// data.name = 'new kailin'
// data.hobby = 'new coding'
// data.schools.push('ECUT')

// // console.log(data)

// 将 observer 函数暴露给全局，方便在浏览器中测试
window.observer = observer