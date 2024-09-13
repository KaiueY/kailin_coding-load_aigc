import { 
  reactive, 
  ReactiveFlags, 
  reactiveMap, 
  shallowReactiveMap 
} from './reactive.js'
import { isObject,  } from '../shared/general.js' // 定义了两个工具函数
import { track, trigger } from './effect.js'  // effect 也是实现 watchEffect 的基础

const get = createGetter() // 当对象被读取值时触发
const set = createSetter() // 当对象被设置值时触发
const shallowReactiveGet = createGetter(true) // 通过实参true来控制实现浅层代理

function createGetter(shallow = false) {
  return function get(target, key, receiver) {
    // isExistMap 函数 用于判断 target 是否已经存在于两个WeakMap中？确定是代理过的
    const isExistMap = () => 
      key === ReactiveFlags.RAW && 
      (receiver === reactiveMap.get(target) || receiver === shallowReactiveMap.get(target))

    if (key === ReactiveFlags.IS_REACTIVE) { // 再次通过标记来判断对象是否被代理
      return true
    } else if (isExistMap()) { // 通过判断对象是否存在于map中来判断对象是否被代理
      return target
    }

    const res = Reflect.get(target, key, receiver)
    // console.log('正在读取值');

    // ！！！！为每个被使用的属性去添加副作用函数（依赖收集）
    track(target, 'get', key)

    if (isObject(res)) { // 读取到的值仍然是对象，那么递归代理
      // 区分深，浅层代理
      return shallow ? res : reactive(res)
    }

    return res

  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    // trigger触发该属性身上的 effect 函数
    trigger(target, 'set', key)
    return result
  }
}

function has(target, key) {
  const res = Reflect.has(target, key)
  // 判断是否存在值时候同样做依赖收集
  track(target, 'has', key)
  return res
}



export const mutableHandlers = { // 深层代理的操作
  get,
  set,
  has,

}

export const shallowReactiveHandlers = { // 浅层代理的操作
  get: shallowReactiveGet,
  set,
  has,

}
