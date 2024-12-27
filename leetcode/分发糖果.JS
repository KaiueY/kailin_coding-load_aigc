/**
 * 计算最少需要准备的糖果数目
 * @param {number[]} ratings - 孩子们的评分数组
 * @return {number} - 最少需要准备的糖果数目
 */
function minCandyDistribution(ratings) {
    // 边界条件检查
    if (!Array.isArray(ratings)) return 0;
    if (ratings.length === 0) return 0;
    if (ratings.length === 1) return 1;

    const n = ratings.length;
    const candies = new Array(n).fill(1);
    let totalCandies = 0;

    // 从左到右扫描，确保右边评分更高的孩子获得更多糖果
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // 从右到左扫描，同时计算总糖果数
    // 将最后一个孩子的糖果数加入总和
    totalCandies = candies[n - 1];

    // 从倒数第二个孩子开始向左扫描
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
        totalCandies += candies[i];
    }

    return totalCandies;
}

// 添加更多测试用例
console.log(minCandyDistribution([1,0,2]));     // 输出: 5
console.log(minCandyDistribution([1,2,2]));     // 输出: 4
console.log(minCandyDistribution([1,3,2,2,1])); // 输出: 7
console.log(minCandyDistribution([]));          // 输出: 0
console.log(minCandyDistribution([1]));         // 输出: 1
