// https://leetcode.cn/problems/palindrome-number/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
let left = 0, right = str.length - 1;

while (left < right) {
  if (str[left] !== str[right]) return false;
  left++;
  right--;
}

return true;
};



// 数学反转数字法（适用于正整数）

// 思路：
// 	1.	通过数学运算反转数字的一半
// 	2.	只需反转 数字的一半，减少不必要的计算
// 	3.	比较反转后的数和原数（或前半部分）
function isPalindromeNumber(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false; // 负数和以0结尾的非零数不是回文数
  
    let reversed = 0;
    let original = x;
  
    while (original > reversed) {
      reversed = reversed * 10 + original % 10;
      original = Math.floor(original / 10);
    }
  
    return original === reversed || original === Math.floor(reversed / 10);
  }



//   递归法
// 思路：
// 	1.	将数字转换为字符串
// 	2.	递归比较首尾字符是否相同
  function isPalindromeRecursive(x) {
    const str = x.toString();
    
    function check(left, right) {
      if (left >= right) return true;
      if (str[left] !== str[right]) return false;
      return check(left + 1, right - 1);
    }
    
    return check(0, str.length - 1);
  }
  