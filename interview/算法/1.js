const obj = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
}

function getValue(obj,path){
    if(!path.length) return obj
    const [key,...keys] = path
    if(!obj[key]) return undefined
    return getValue(obj[key],keys)
}

const res = getValue(obj,['a','b','c','d'])
console.log(res);
