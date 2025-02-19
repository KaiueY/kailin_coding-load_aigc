// https://leetcode.cn/problems/maximum-distance-in-arrays/description/?envType=daily-question&envId=2025-02-19
/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let min = arrays[0][0],
    max = arrays[0][arrays[0].length - 1]
  let res = 0
  for (let i = 1; i < arrays.length; i++) {
    res = Math.max(
      res,
      Math.abs(arrays[i][arrays[i].length - 1] - min),
      Math.abs(arrays[i][0] - max)
    )
    min = Math.min(min, arrays[i][0])
    max = Math.max(max, arrays[i][arrays[i].length - 1])
  }
  return res
}
