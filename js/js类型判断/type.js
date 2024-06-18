function  type (x) {
    let res = Object.prototype.toString.call(x)
    return res.slice(8,-1)
}
console.log(type('hello'));
console.log(type(123));
console.log(type([]));
console.log(type({a:2}));