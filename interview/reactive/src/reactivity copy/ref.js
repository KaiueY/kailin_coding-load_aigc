import { isObject } from '../shared/general.js'
import { reactive } from './reactive.js'
import { track, trigger } from './effect.js'


export function ref(val) {
  return createRef(val)
}

function createRef(val) { // 把val变成响应式
  if (isRef(val)) {
    return val
  }
  return new RefImpl(val)
}

function isRef(val) {  // 判断val是否已经被ref过
  return !!(val && val.__v_isRef)
}

class RefImpl {
  constructor(val) {
    this.__v_isRef = true // 每一个被ref操作过的值都会被添加 __v_isRef 属性，这是为了防止被二次 ref
    this._val = convert(val)  // 如果ref接收到的参数是对象，直接搬reactive出来代理它
  }

  get value() {
    // 为 this 实例做依赖收集
    track(this, 'get', 'value')
    return this._val
  }

  set value (newVal) {
    if (newVal !== this._val) {
      this._val = convert(newVal) // 如果你给ref变量赋值一个对象，同样喊reactive来帮忙
      trigger(this, 'set', 'value')
    }
  }

}

function convert(val) {
  return isObject(val) ? reactive(val) : val
}