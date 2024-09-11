let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype)

Array.from(['push', 'shift', 'pop', 'unshift']).forEach((method) => {
  // 函数劫持，重写函数
  proto[method] = function() {
    oldArrayPrototype[method].call(this, ...arguments)
    updateView()
  }
})




// 观察者
function observer(target) {

  if (Array.isArray(target)) {
    target.__proto__ = proto  // 重写数据的原型
    return
  }

  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  if (typeof value === 'object' && value !== null) {
    observer(value)
  }

  Object.defineProperty(target, key, {
    get() {  // 取值
      return value
    },
    set(newVal) { // 设置值
      if (newVal !== value) {
        value = newVal
        updateView()
      }
    }
  })
}

function updateView() {
  console.log('更新视图');
}


let obj = {
  a: 1,
  b: 2,
  c: {
    n: 3
  },
  d: ['1', '2', '3']
}
observer(obj)


// obj.c.n = 300
// obj.d.push('4')
// obj.d.length = 5
obj.e = 5


// 1. 使用数据劫持函数，递归的劫持对象上的多层属性
// 2. 直接修改数组的length属性时无效的
// 3. 对象上不存在的属性无法劫持   This.$set(obj, 'e', 5)
// 4. 重写数组上的方法