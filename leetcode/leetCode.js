/**
 * 1366. 通过投票对团队排名
 * 中等
 * 
 * 有一个特殊的排名系统，根据投票中的偏好顺序对团队进行排名。
 * 每个投票者从高到低对所有团队进行排名。
 * 
 * 排名规则：
 * 
 * 1. 排名由团队获得的“第一名”票数决定。
 * 2. 如果有平局，则考虑“第二名”票数，依此类推。
 * 3. 如果在考虑所有票数后仍然有平局，则按字母顺序对团队进行排名。
 * 
 * 给定一个字符串数组 votes 表示每个投票者对所有团队的排名，
 * 返回一个字符串，表示应用排名规则后所有团队的排名。
 * 
 * 示例 1:
 * 
 * 输入: votes = ["ABC","ACB","ABC","ACB","ACB"]
 * 输出: "ACB"
 * 解释:
 * 团队 A 获得了五张“第一名”票，没有其他团队获得“第一名”票，因此团队 A 排名第一。
 * 团队 B 获得了两张“第二名”票和三张“第三名”票。
 * 团队 C 获得了三张“第二名”票和两张“第三名”票。
 * 由于团队 C 获得了更多的“第二名”票，因此团队 C 排名第二，团队 B 排名第三。
 */


/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const n = votes.length;
    const ranking = {};
    // 初始化哈希映射
    for (const vid of votes[0]) {
        ranking[vid] = Array(votes[0].length).fill(0);
    }
    // 遍历统计
    for (const vote of votes) {
        for (let i = 0; i < vote.length; ++i) {
            ranking[vote[i]][i]++;
        }
    }

    // 取出所有的键值对
    const result = Object.entries(ranking);
    // 排序
    result.sort((a, b) => {
        for (let i = 0; i < a[1].length; i++) {
            if (a[1][i] !== b[1][i]) {
                return b[1][i] - a[1][i];
            }
        }
        return a[0].localeCompare(b[0]);
    });
    return result.map(([vid]) => vid).join('');
};
