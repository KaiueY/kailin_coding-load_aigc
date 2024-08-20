let obj ={
    a:1,
    b:{
        c:2
    }
}

let clone2 = Object.create(obj)
function clone(obj){
    let clone = Object.create(obj)
    return clone
}

let obj2 = clone(obj)
console.log(obj2);
console.log(clone2.a);

