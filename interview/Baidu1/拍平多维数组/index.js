// 展平 递归
const arr =[1,[2,[3,4]]]

function flatten(arr) {
    let result=[]
    //len缓存了arr.length的值  arr是对象 每次循环读取arr.length耗时
    for(let i=0,len=arr.length;i<len;i++){
        // 如果是数组 递归
        if(Array.isArray(arr[i])){
            result=result.concat(flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
        // 否则 加入数组
    }
    return result
}
console.log(flatten(arr));