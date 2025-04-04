// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1,2)(3)(4,5) = 15;
function add(...args) {
    function inner(...nextArgs) {
        //[].slice.call(arguments)
        //类数组转数组
        if (nextArgs.length === 0) {
            return args.reduce((sum, num) => sum + num, 0);
        }
        return add(...args, ...nextArgs);
    }
    return inner;
}
console.log(add(1)(2)(3)());
console.log(add(1,2)(3)(4,5)());
