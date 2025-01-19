// https://leetcode.cn/problems/join-two-arrays-by-id/
 
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
const merged = {};

combinedArray.forEach((obj) => {
  const id = obj.id;
  if (!merged[id]) {
    merged[id] = { ...obj };
  } else {
    merged[id] = { ...merged[id], ...obj };
  }
});

const result = Object.values(merged);
result.sort((a, b) => a.id - b.id);

return result;
};