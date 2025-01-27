
function solution(relations) {
    // 构建邻接表
    const graph = new Map();
    
    // 初始化图
    for (const relation of relations) {
        const [target, ...dependencies] = relation;
        if (!graph.has(target)) {
            graph.set(target, []);
        }
        for (const dep of dependencies) {
            if (!graph.has(dep)) {
                graph.set(dep, []);
            }
            graph.get(dep).push(target);
        }
    }
    
    // 访问状态：0-未访问，1-访问中，2-已完成
    const visited = new Map();
    
    // DFS检测环
    function hasCycle(node) {
        if (visited.get(node) === 1) return true;  // 发现回边
        if (visited.get(node) === 2) return false; // 已经访问过的节点
        
        visited.set(node, 1); // 标记为访问中
        
        // 访问所有相邻节点
        const neighbors = graph.get(node) || [];
        for (const next of neighbors) {
            if (hasCycle(next)) {
                return true;
            }
        }
        
        visited.set(node, 2); // 标记为已完成
        return false;
    }
    
    // 检查所有节点
    for (const node of graph.keys()) {
        if (!visited.has(node)) {
            if (hasCycle(node)) {
                return false;
            }
        }
    }
    
    return true;
}

function main() {
    // Add your test cases here
    console.log(solution([["A","B","C"],["B","D"],["C","E"],["D","A"]]) === false);
    console.log(solution([
        ["A", "B", "C", "D", "E"],
        ["F", "G", "H", "I"],
        ["J", "K", "L", "M", "A"],
        ["N", "O", "P", "Q"],
        ["E", "H", "I", "J"],
        ["R", "S", "T", "U"],
        ["V", "W", "X"],
        ["Y", "Z"]]) === false);
}

main();