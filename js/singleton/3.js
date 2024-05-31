"use strict"
let obj={

}
let obj2={
    name:'kai',
    getName:function(){
        console.log(this.name);
    }
}
let obj3={

}
obj3.__proto__=obj2
console.log(obj3.name);
obj3.__proto__=obj
console.log(obj3.name);
