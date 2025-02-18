// https://leetcode.cn/problems/range-frequency-queries/

/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.get(arr[i]).push(i);
        } else {
            map.set(arr[i], [i]);
        }
    }
    this.map = map;

};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
    const indexs = this.map.get(value);
    if (!indexs) return 0;
    
    // 找到第一个大于等于left的位置
    let l = 0, r = indexs.length;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (indexs[mid] >= left) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    const leftIndex = l;
    
    // 找到第一个大于right的位置
    l = 0, r = indexs.length;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (indexs[mid] > right) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    const rightIndex = l;
    
    return rightIndex - leftIndex;
    
};

/** 
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */