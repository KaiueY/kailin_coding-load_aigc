
const observeArray = (arr) => {
    arr.forEach(item => {
        observer(item)
    })
}
const updateView = () => {
    console.log('视图更新')
}
const observer = (obj) => {


    walk (obj)
}
const walk = (value) => {
    if (Array.isArray(value)) {
        // 如果是数组，则调用 observeArray 递归处理
        value.__proto__ = arrayMethods // 劫持原型方法
        observeArray(value)
    } else if (typeof value === 'object' && value !== null) {
        // 如果是对象，则递归处理对象的属性
        Object.keys(value).forEach(key => {
            defineReactive(value, key, value[key])
            observer(value[key])
        })
    }
}
const defineReactive = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`you are getting ${key}`);
            return value
        },
        set(val) {
            console.log(`you are setting ${key} to ${val}`);
            value = val
        }
    })
}


const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

methodsToPatch.forEach((method)=>{
    arrayMethods[method] = function(...args){
        const result = arrayProto[method].apply(this, args)
        let insert
        switch(method){
            case 'push':
            case 'unshift':
                insert = args
                break
            case 'splice':
                insert = args.slice(2)
                break
            default: 
                break         
        }
        if(insert){
            for (target of insert) {
                observer(target)
            }
        }
        updateView()
        return result
    }
})


const data = {
    person: {
        weight:140 ,
        tall: 180
    },
    hobby: 'coding',
    county: 'china',
    schools: ['pku','tsinghua']
}
observer(data)
data.schools.push('ECUT')
data.schools.pop()
data.schools.splice(1, 1, 'MIT') 