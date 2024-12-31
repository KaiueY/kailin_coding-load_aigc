/**
 * 问题描述:
 * 给定两个二进制字符串，返回他们的和（用十进制字符串表示）。输入为非空字符串且只包含数字 1 和 0 ，请考虑大数问题。时间复杂度不要超过 O(n^2)，其中 n 是二进制的最大长度。
 *
 * 输入格式:
 * 每个样例只有一行，两个二进制字符串以英文逗号“,”分割
 *
 * 输出格式:
 * 输出十进制格式的两个二进制的和
 *
 * 输入样例:
 * 101,110
 *
 * 输出样例:
 * 11
 *
 * 数据范围:
 * 每个二进制不超过 100 个字符，JavaScript 语言下请考虑大数的情况。
 */
function solution(binary1, binary2) {
    // Please write your code here
    // 补齐较短的二进制字符串
    const len1 = binary1.length;
    const len2 = binary2.length;
    if (len1 < len2) {
        binary1 = binary1.padStart(len2, '0');
    } else if (len2 < len1) {
        binary2 = binary2.padStart(len1, '0');
    }

    let carry = 0; 
    let result = [];

    for (let i = binary1.length - 1; i >= 0; i--) {
        const sum = carry + parseInt(binary1[i], 10) + parseInt(binary2[i], 10);
        result.push(sum % 2); 
        carry = Math.floor(sum / 2);
    }

    if (carry > 0) {
        result.push(carry);
    }

    const binarySum = result.reverse().join('');
    return parseInt(binarySum, 2).toString();

  }
  
  function main() {
    // You can add more test cases here
    console.log(solution("101", "110") === "11");
    console.log(solution("111111", "10100") === "83");
    console.log(solution("111010101001001011", "100010101001") === "242420");
    console.log(solution("111010101001011", "10010101001") === "31220");
  }
  
  main();