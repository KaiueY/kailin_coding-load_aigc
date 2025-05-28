function find (arr:number[],target:number):number[]{
    const len = arr.length
    const map = new Map()
    for(let i = 0;i<len;i++){
        let num = arr[i]
        let diff = target - num
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        map.set(num,i)
    }
    return []
}