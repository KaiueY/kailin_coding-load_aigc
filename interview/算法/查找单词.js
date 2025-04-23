/**
 * @description 给定一个二维网格 `board` 和一个字典中的单词列表 `words`
 * 找出所有同时在二维网格和字典中出现的单词。
 */

function solution(board, words) {
    const res = new Set()
    const m = board.length
    const n = board[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const word = board[i][j]
            if (words.includes(word)) {
                res.add(word)
            }
        }
    }
    return [...res]

}