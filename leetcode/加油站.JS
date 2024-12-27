/**
 * LeetCode 134. 加油站
 * 
 * 题目描述：
 * 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
 * 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。
 * 你从其中的一个加油站出发，开始时油箱为空。
 * 
 * 要求：
 * 1. 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。
 * 2. 如果题目有解，该答案即为唯一答案。
 * 
 * 解题思路：
 * 1. 如果总油量小于总消耗，必然无法完成绕行
 * 2. 如果能完成绕行，则必然存在一个起点
 * 3. 如果从位置i开始，无法到达位置j，那么i和j之间的任何位置都不可能作为起点
 * 
 * @param {number[]} gas - 每个加油站的汽油量
 * @param {number[]} cost - 从每个加油站到下一站需要的汽油量
 * @return {number} - 返回可以完成绕行的起始加油站索引，如果不存在则返回-1
 */
function canCompleteCircuit(gas, cost) {
    if (!gas || !cost || gas.length !== cost.length) return -1;
    
    const n = gas.length;
    let totalGas = 0;      // 总剩余汽油量
    let currentGas = 0;    // 当前剩余汽油量
    let startStation = 0;  // 起始站点
    
    for (let i = 0; i < n; i++) {
        totalGas += gas[i] - cost[i];
        currentGas += gas[i] - cost[i];
        
        // 如果当前累积汽油量小于0，说明从startStation到i的这些站点都不能作为起点
        if (currentGas < 0) {
            startStation = i + 1;  // 将起点设为下一个站
            currentGas = 0;        // 重置当前汽油量
        }
    }
    
    // 如果总剩余汽油量大于等于0，则返回起始站点，否则返回-1
    return totalGas >= 0 ? startStation : -1;
}

// 测试用例
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));    // 输出: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3]));            // 输出: -1
console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]));    // 输出: 4