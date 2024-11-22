

// 现在有一个对象 比如data data中的数据都需要变成响应式
// const data = {
//     name: 'kailin',
//     hobby: 'coding',
//     county: 'china',
//     schools: ['pku','tsinghua']
// }
//  I need a function that make all key to reactive

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

function observer(obj) {
    if (!obj || typeof obj !== 'object') return

    if (Array.isArray(obj)) {
        obj.__proto__ = arrayMethods  // 添加这行，重写数组原型
    }

    // 遍历对象
    for (let key in obj) {
        // if(typeof obj[key] === 'object' && obj[key] !== null){
        // maybe it is a array or a object
        if(Object.prototype.toString.call(obj[key]).slice(8,-1) === 'Object' || Array.isArray(obj[key])){
            observer(obj[key])
        }else{
            defineReactive(obj, key, obj[key])
        }
    }
}

function defineReactive(target, key, value) {
    Object.defineProperty(target, key, {//the first one , type of Object
        get() {
            console.log(`you are getting ${key}`);
            return value
            // return obj.a  死循环
        },
        set(val) {
            value = val
            console.log(`you are setting ${key} to ${val}`);
            updateView()
        }
    })
}

function updateView() {
    console.log('update View');
}
// observer(data)

// for (key in data) {
//     if(!Array.isArray(data[key])){
//         data[key] = 'new value'
//     }else{
//         data[key].push('ECUT')
//     }
// }
// console.log(data);
// export default observer
window.observer = observer


// console.log(obj.a = 100);
// // console.log(obj.b);

