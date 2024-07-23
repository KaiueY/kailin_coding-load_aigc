// 石头剪刀布
// node 2.js rock   //电脑也会自动随机出一个并输出

let playerAction = process.argv[process.argv.length - 1]

// 随机
let random = Math.random() *3
let computerAction= ''
if(random <1 ){
     computerAction = 'rock'

}
else if(random >2){
     computerAction = 'scissor'
}
else{
     computerAction = 'paper'
}

// 比较
if(playerAction === computerAction){
    console.log('平局');
}
else if(
    (playerAction === 'rock' && computerAction === 'scissor') ||
    (playerAction === 'scissor' && computerAction === 'paper') ||
    (playerAction === 'paper' && computerAction === 'rock')
){
    console.log('你赢了');
}
else{
    console.log('你输了');
}
