// 假设我们有一个二维数组 arr，我们要生成一个数组，
// 包含所有可能的组合，其中每个组合由 arr 的每个子数组中的一个元素组成。

function combarr(arr){
    const result = []

    function backTrack(index,path){
        if(index === arr.length){
            result.push([...path])
            return
        }
        for(let num of arr[index]){
            // 遍历一层
            path.push(num)
            backTrack(index+1,path)
            path.pop()//回溯 1,3,5结束后需要删掉5
            console.log(`${index}---`,result);
            
        }
    }
    backTrack(0,[])

    return result
}
let arr = [
    [1,2],
    [3,4],
    [5,6]
]
combarr(arr)