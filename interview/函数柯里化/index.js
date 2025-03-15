// 实现add(1)(2)(3)(4)()
function add(x) {
    let sum = x;

    const fn = function (y) {
        if (arguments.length === 0) {

            return sum;

        }
        sum += y; return fn;
    }
    return fn
}
console.log(add(1)(2)(3)(4)());
