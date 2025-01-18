// https://leetcode.cn/problems/substring-with-concatenation-of-all-words/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];

const wordLength = words[0].length;
const totalWordsLength = wordLength * words.length;
const wordCount = {};

// 统计 words 中每个单词的出现次数
for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
}

const result = [];

// 遍历 s 中的每个可能的起始位置
for (let i = 0; i <= s.length - totalWordsLength; i++) {
    const seen = {};
    let j = 0;
    
    // 检查当前窗口内的子串是否符合要求
    while (j < words.length) {
        const word = s.substr(i + j * wordLength, wordLength);
        
        // 如果 word 不在 words 中，或者出现次数超过 words 中的次数，则跳出循环
        if (!(word in wordCount)) {
            break;
        }
        
        seen[word] = (seen[word] || 0) + 1;
        
        if (seen[word] > wordCount[word]) {
            break;
        }
        
        j++;
    }
    
    // 如果所有单词都匹配，则将当前起始索引加入结果
    if (j === words.length) {
        result.push(i);
    }
}

return result;
};