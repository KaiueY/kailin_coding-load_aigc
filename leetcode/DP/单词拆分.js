/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const maxLen = Math.max(...wordDict.map(word => word.length));
const words = new Set(wordDict);
const memo = Array(s.length + 1);

function dfs(i) {
    if (i === 0) { // 成功拆分！
        return true;
    }
    if (memo[i] !== undefined) {
        return memo[i];
    }
    for (let j = i - 1; j >= Math.max(i - maxLen, 0); j--) {
        if (words.has(s.slice(j, i)) && dfs(j)) {
            return memo[i] = true;
        }
    }
    return memo[i] = false;
}

return dfs(s.length);

};