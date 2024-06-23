let obj={
    a:1,
    b:{n:2}

}
const newObj=structuredClone(obj);
obj.b.n=3
console.log(newObj);// { a: 1, b: { n: 2 } } 
