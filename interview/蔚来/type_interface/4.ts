function identity<T>(arg:T):T{
    return  arg
}
let output1 = identity<string>('mystring')

let output2 = identity<string>(12)