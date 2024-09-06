// T为一种类型参数 ，包括参数和返回值都需要是T类型  可以声明一个T类型，也可以不声明，但是会根据传入的参数推断。
// 这就是显示类型和隐式类型
function identity<T>(arg: T): T {
    return arg;
}

// 显式类型注解
let output1 = identity<string>('mystring'); // output1 的类型是 string

// 隐式类型推断
let output2 = identity(12); // output2 的类型是 number

console.log(output1); // 输出 "mystring"
console.log(output2); // 输出 12