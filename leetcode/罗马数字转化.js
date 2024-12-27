/**
 * 将整数转换为罗马数字。
 *
 * 罗马数字规则：
 * - 罗马数字由以下符号表示：I（1），V（5），X（10），L（50），C（100），D（500），M（1000）。
 * - 一些特殊组合表示减法形式：4（IV），9（IX），40（XL），90（XC），400（CD），900（CM）。
 * - 其他情况下，按从大到小的顺序组合表示，例如：3000 = MMM，700 = DCC。
 *
 * 输入：
 * - 一个整数 num，1 <= num <= 3999。
 *
 * 输出：
 * - 对应的罗马数字字符串。
 *
 * 示例：
 * 输入：num = 3749
 * 输出："MMMDCCXLIX"
 *
 * 提示：
 * - 使用贪心算法，每次选择能够匹配的最大值。
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";
  const transform = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  //接受一个数字，将其转换为罗马字符
  const transfer = (num) => {
    for (const { value, symbol } of transform) {
      if (value <= num) {
        while (value<=num) {
          result += symbol ;
          num -= value;
        }
      }
    }
    
  };
  transfer(num)
  return result
};
console.log(intToRoman(1994));

// 一种更优解
// var intToRoman = function(num) {
//     const obj = {
//         1: 'I',
//         5: 'V',
//         10: 'X',
//         50: 'L',
//         100: 'C',
//         500: 'D',
//         1000: 'M',
//     }
//     let str = '';
//     const arr = [1000, 500, 100, 50, 10, 5, 1];
//     for (let i = 0; i < arr.length; i++) {
//         const count = Math.floor(num / arr[i]);
//         num = num % arr[i];
//         for (let j = 0; j < count; j++) {
//             str += obj[arr[i]];
//         }
//     }

//     return str.replace('DCCCC', 'CM').replace('CCCC', 'CD').replace('LXXXX', 'XC').replace('XXXX', 'XL').replace('VIIII', 'IX').replace('IIII', 'IV');
// };