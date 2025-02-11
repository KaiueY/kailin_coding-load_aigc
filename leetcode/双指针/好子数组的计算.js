// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424436653371686956
function solution(nums, k) {
    // 计算恰好包含k个不同整数的子数组个数
    function atMostK(nums, k) {
        if (k < 0) return 0;
        
        const count = new Map();
        let left = 0;
        let result = 0;
        
        // 右指针遍历数组
        for (let right = 0; right < nums.length; right++) {
            // 更新当前数字的计数
            count.set(nums[right], (count.get(nums[right]) || 0) + 1);
            
            // 当窗口中不同整数个数大于k时，移动左指针
            while (count.size > k) {
                count.set(nums[left], count.get(nums[left]) - 1);
                if (count.get(nums[left]) === 0) {
                    count.delete(nums[left]);
                }
                left++;
            }
            
            // 添加当前窗口的所有有效子数组个数
            result += right - left + 1;
        }
        
        return result;
    }
    
    // 恰好包含k个不同整数的子数组个数 = 
    // 最多包含k个不同整数的子数组个数 - 最多包含k-1个不同整数的子数组个数
    return atMostK(nums, k) - atMostK(nums, k - 1);
}

function main() {
    console.log(solution([1, 2, 1, 2, 3], 2) === 7);
    console.log(solution([1, 2, 1, 3, 2], 3) === 5);
    console.log(solution([1, 1, 1, 1], 1) === 10);
}

main();