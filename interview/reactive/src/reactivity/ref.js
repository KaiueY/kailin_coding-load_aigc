import { isObject } from '@/shared/general.js'
import {track , trigger} from './effect.js'
import { reactive } from './reactive.js'
export function ref(val){
    return createRef(val)
}

function createRef(val){
    return isRef(val) ? val : new RefImpl(val)
}
function isRef(val){
    return !!(val && val.__v_isRef)
}

function convert(val){
    return isObject(val) ? reactive(val) : val
}
class RefImpl{

    constructor(val){
        this._val = convert(val)
        this.__v_isRef = true

    }
    
    get value(){
        track(this,'get','value')
        return this._val
    }
    set value(newVal){
        this._val = newVal
        // 视图更新
        trigger(this,'set','value')//触发依赖
    }
    
}