let s='s'
let n=123
let f=false
let u =undefined
let nu=null

// console.log(Boolean(0));//false
// console.log(Boolean(u));//false
// console.log(Boolean(nu));//false
// console.log(Boolean(''));//false
// console.log(Boolean(NaN));//false
// console.log(Boolean(-1));//true

console.log(Number(s));//NaN
console.log(Number('a123'));//NaN
console.log(Number(''));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number([]));//0