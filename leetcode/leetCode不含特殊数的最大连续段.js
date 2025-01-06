/**
 * 2274. 不含特殊数的最大连续段
 * 中等
 * 
 * Alice 管理着一家公司，并将部分楼层租用为办公空间。Alice 决定将一些楼层指定为特殊楼层，仅用于休息。
 * 
 * 给定两个整数 bottom 和 top，表示 Alice 租用的楼层范围（包括 bottom 和 top）。还给定一个整数数组 special，其中 special[i] 表示 Alice 指定用于休息的楼层。
 * 
 * 返回不含任何特殊楼层的最大连续楼层数。
 * 
 * 示例 1:
 * 
 * 输入: bottom = 2, top = 9, special = [4,6]
 * 输出: 3
 * 解释: 以下是不含特殊楼层的连续楼层范围：
 * - (2, 3)，楼层数为 2。
 * - (5, 5)，楼层数为 1。
 * - (7, 9)，楼层数为 3。
 * 因此，不含特殊楼层的最大连续楼层数为 3。
 */

/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    let result = -1
    let current = 0
    //遍历底层到顶部
    for(let i = bottom;i <= top;i++){
        // 如果在特殊楼层中，则清空
        if(special.indexOf(i)!==-1){
            result = Math.max(result,current)
            current = 0
        }else{
            current ++
        }
    }
    return Math.max(result,current) 
};
// maxConsecutive(2,9,[4,6])

//better 

var maxConsecutive2 = function(bottom, top, special) {
    special.push(...[top+1,bottom-1])
    special.sort((a,b)=>a-b)
    let result = 0
    console.log(special);
    
    for(let i =1;i<special.length;i++){
        result = Math.max(result,special[i]-special[i-1])
    }
    return result-1
};
maxConsecutive2(2,9,[4,6])