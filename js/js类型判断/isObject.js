function isObject(obj) {
    if(typeof obj==='object' && obj!== null){
        return true
    }
    return false
}

console.log(isObject(null)); //false
console.log(isObject({})); // true
console.log(isObject([])); // true
console.log(isObject(new Date())); // true
console.log(isObject(null)); // false
console.log(isObject(42)); // false
console.log(isObject('hello')); // false
console.log(isObject(undefined)); // false
console.log(isObject(function() {})); // false
