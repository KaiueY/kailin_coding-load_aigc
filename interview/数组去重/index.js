function uniqueArray(arr) {
    return Array.from(new Set(arr));
}

console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // 输出: [1, 2, 3, 4, 5]


// const obj = {
//     name: 'John',
//     greet: function() {
//     console.log(`Hello, ${this.name}!`);
//     }
//     };
//     setTimeout(obj.greet, 1000); // 预期输出：Hello, John!
