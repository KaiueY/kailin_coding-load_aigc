/**
 * 274. H 指数
 * @param {number[]} citations
 * @return {number}
 *
 *  H 指数
 *  H 指数是指一名科研人员在其所有研究中所发表的论文中被引用的最高次数
 *  例如，某人发表了 10 篇论文，分别被引用了 9,8,5,4,3,2,1,1,1,1 次
 *  该人 H 指数是 5，因为他发表的 5 篇论文至少被引用了 5 次
 *  该人发表的其它 5 篇论文至多被引用了 4 次
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }
    return h;
};