interface Point {
    x:number
    y:number

}
interface threePoint extends Point{
    z:number;

}
let obj: threePoint={
    x:1,
    y:2,
    z:3
}
// 以上证明了可以继承
