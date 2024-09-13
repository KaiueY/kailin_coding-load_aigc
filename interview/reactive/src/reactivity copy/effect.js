const targetMap = new WeakMap() // 存放的key为原对象，value为
let activeEffect = null  

export function effect(fn, options = {}) {
  const effectFn = () => {
    try {
      activeEffect = effectFn
      return fn()
    } finally {
      activeEffect = null
    }
  }
  if (!options.lazy) {
    effectFn()
  }

  // scheduler任务调度器，为的是在effect回调执行完毕后可以顺势执行scheduler中的函数，此时思考一下watchEffect的语法会明了很多
  // 这个 scheduler 不明白的话我们后面有例子解释
  effectFn.scheduler = options.scheduler 
  return effectFn
}

// 为属性添加 effect
export function track(target, type, key) {
  // targetMap = {  存储的结构是这样的
  //   target: {
  //     key: [effect1, effect2, ...]
  //   }
  // }

  let depsMap = targetMap.get(target)
  if (!depsMap) { // 初次读取该值
    targetMap.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) { // 当前这个key还未添加过effect
    deps = new Set()
  }
  if (!deps.has(activeEffect) && activeEffect) {
    // 存一个effect函数
    deps.add(activeEffect)
  }
  depsMap.set(key, deps)
  console.log('targetMap:', targetMap);
  
}

// 触发属性的effect
export function trigger(target, type, key) {
  const depsMap = targetMap.get(target) // targetMap存储的：map: {name: [effect], age: [effect1, effect2]}
  if (!depsMap) { // 没有依赖
    return
  }

  const deps = depsMap.get(key) // 拿到被设置值的那个属性的effect
  if (!deps) { // 这个属性从来没有被添加过effect
    return 
  }

  deps.forEach(effectFn => {
    if (effectFn.scheduler) {
      effectFn.scheduler()  // 执行该属性任务调度器中的任务
    } else {
      effectFn() // 直接触发该属性的effect
    }
  });

}