//实现 let [a, b] = {a: 1, b: 2}

// const array = [1,2,3,4]
// const iterator = array[Symbol.iterator]()

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

Object.prototype[Symbol.iterator] = function() {
    return Object.values(this)[Symbol.iterator]()
}
let [a,b] = {a:1,b:2}

console.log(a,b);
