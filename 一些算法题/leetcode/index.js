function sumOfUnique(nums) {
    const map = new Map();
    let sum = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        // 第一次出现 且 map没有
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
            sum += nums[i]
        }
        else {
            let time = map.get(nums[i])
            if (time == 1) {
                sum -= nums[i]
            }
            map.set(nums[i], time + 1)

        }
    }
    return sum
}

console.log(sumOfUnique([1, 2, 3, 2, 2, 2, 2])) // 4