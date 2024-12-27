/**
 * 给你一个整数数组 nums ，一个整数数组 queries 和一个整数 x 。
 *
 * 对于每个查询 queries[i] ，你需要找到 nums 中第 queries[i] 个 x 的位置，并返回它的下标。
 * 如果数组中 x 的出现次数少于 queries[i] ，该查询的答案为 -1 。
 *
 * 请你返回一个整数数组 answer ，包含所有查询的答案。
 *
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    const map = new Map();
    const answer = [];
    let sum = 0
    nums.forEach((element,index)=>{
        if(element === x){
            sum++
            map.set(sum,index)
            
        }
    })
    queries.forEach((element,index)=>{
        if(element > sum){
            answer[index] =-1
        }else{
            answer[index] = map.get(element)
        }
    })
    return answer
};

//better
const targetArr = [-1];
nums.forEach((num, index) => {
    if (num === x) {
        targetArr.push(index);
    }
});
return queries.map(i => targetArr[i] ?? -1);