function twoSum(nums,target){
    const map = new Map() 

    let len = nums.length
    for(let i = 0 ;i<len ; i++ ){
        const completment = target-nums[i]
        if(map.has(completment )){
            return [map.get(completment),i]
        }
        map.set(nums[i],i)
    }
    return []
}