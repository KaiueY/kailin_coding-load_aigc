function randomInt(min, max) {
    const n = Math.random()
    return Math.floor(min * (1 - n) + max * n)
}

function createRandomPicker(arr){
    // 拷贝一份数组
    arr=[...arr]
    function randomPick(){
        const len = arr.length-1
        const index = randomInt(0,len);
        [arr[index],arr[len]]=[arr[len],arr[index]];
        return arr[index]
    }
    // 每次使用在第一次都会是最后一个元素 所以要先调用一次 弃用第一次的结果
    randomPick()
    return randomPick
}



// // 闭包
// function createRandomPicker(arr) {
//     let lastPick = null

//     function randomPick(arr) {
//         const index = randomInt(0, arr.length)
//         lastPick = arr[index]
//         return arr[index]
//     }
//     return randomPick
// }
module.exports = {
    randomInt,
    createRandomPicker
}
