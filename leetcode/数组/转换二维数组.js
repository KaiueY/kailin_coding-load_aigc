// https://leetcode.cn/problems/convert-an-array-into-a-2d-array-with-conditions/
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var findMatrix = function(arr) {
    const countMap = new Map();

    // 统计数字出现次数
    for (const num of arr) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    const result = [];
  
    while (countMap.size > 0) {
      // 获取当前最大出现次数的数字
      const sortedEntries = [...countMap.entries()].sort((a, b) => b[1] - a[1]);
      const maxCount = sortedEntries[0][1];
      
      // 确保结果有足够的行
      while (result.length < maxCount) {
        result.push([]);
      }
  
      // 将数字依次填入不同的行
      for (let i = 0; i < sortedEntries.length; i++) {
        const [num, count] = sortedEntries[i];
        result[i].push(num);
        if (count === 1) {
          countMap.delete(num);
        } else {
          countMap.set(num, count - 1);
        }
      }
    }
  
    return result;
};

console.log(findMatrix([[1,3,4,2],[1,3],[1]]));
