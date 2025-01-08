/*
题目描述：
给定一个长度为 4 的倍数的字符串，该字符串仅由字母 A、S、D、F 组成。现在需要替换其中的一个子串，使得替换后的字符串中每个字母的出现频率相同。例如，对于字符串 ADDF，只需要将 D 替换为 S，就可以得到每个字母出现频率相同的字符串 ASDF。请找出满足要求的最小子串长度。

输入格式：
第一行输入一个字符串。
输出格式：
输出一个整数，表示满足要求的最小子串长度。

输入样例 1：
ADDF

输出样例 1：
1

样例说明：
将 D 替换为 S，可以将 ADDF 转换为 ASDF。
*/
function solution(input) {
      const n = input.length;
      const target = n / 4;
      const count = { 'A': 0, 'S': 0, 'D': 0, 'F': 0 };
      
      for (let char of input) {
        count[char]++;
      }
      
      if (count['A'] === target && count['S'] === target && count['D'] === target && count['F'] === target) {
        return 0;
      }
      
      let minLength = n;
      let left = 0;
      
      for (let right = 0; right < n; right++) {
        count[input[right]]--;
        
        while (count['A'] <= target && count['S'] <= target && count['D'] <= target && count['F'] <= target) {
          minLength = Math.min(minLength, right - left + 1);
          count[input[left]]++;
          left++;
        }
      }
      
      return minLength;
  }
  function main() {
      // You can add more test cases here
      console.log(solution("ADDF") === 1);
      console.log(solution("ASAFASAFADDD") === 3);
  }
  
  main();
  