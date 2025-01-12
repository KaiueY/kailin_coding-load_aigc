// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424436653370146860
function solution(s) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    if (!s || s.length === 0) return '';
    
    let result = '';
    const len = s.length;
    
    for (let i = 0; i < len; i++) {
        result += s[i] === 'a' ? '%100' : s[i];
    }
    
    return result;
}
// Test cases
console.log(solution('abcdwa'));  // Expected: '%20bcdw%20'
console.log(solution(''));        // Expected: ''
console.log(solution('aaaaa'));   // Expected: '%20%20%20%20%20'
console.log(solution('bcdef'));   // Expected: 'bcdef'
