import { mutableHandlers, shallowReactiveHandlers } from './baseHandlers.js'
// mutableHandlers: 在该对象中做深层代理行为
// shallowReactiveHandlers: 在该对象中做浅层代理行为

export const reactiveMap = new WeakMap() // 缓存已经被深层代理过的对象
export const shallowReactiveMap = new WeakMap() // 缓存已经被浅层代理过的对象

// 代理过的标记
export const ReactiveFlags = {
  IS_REACTIVE: '__v_isReactive'  // 我们会让被代理过的对象会有这个属性
}

export function reactive(target) { // 1.深层代理
  return createReactiveObject(target, reactiveMap, mutableHandlers)
}

export function shallowReactive(target) { // 1.浅层代理
  return createReactiveObject(target, shallowReactiveMap, shallowReactiveHandlers)
}

export function isReactive(value) { // 判断对象是否已经被代理过，目的是防止二次代理
  return !!value[ReactiveFlags.IS_REACTIVE] 
}


function createReactiveObject(target, proxyMap, proxyHandlers) { // 2. 响应式函数
  // 不是对象类型就直接返回，不再做响应式
  if (typeof target !== 'object') {
    return target
  }

  // 是否曾经被代理过
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  // 执行代理
  const proxy = new Proxy(target, proxyHandlers)

  // 缓存该代理对象
  proxyMap.set(target, proxy)
  return proxy
}