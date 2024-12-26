
function solution(n, max, array) {
    const countMap = new Map();
    for (const num of array) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // 找出所有可能作为三张牌的数字（出现次数 >= 3）
    const possibleThrees = [];
    // 找出所有可能作为对子的数字（出现次数 >= 2）
    const possiblePairs = [];
    
    for (const [num, count] of countMap.entries()) {
        if (count >= 3) possibleThrees.push(num);
        if (count >= 2) possiblePairs.push(num);
    }
    
    // 按照牌面值从大到小排序（注意 A 的特殊处理）
    const compareCards = (a, b) => {
        if (a === 1) return -1; // A 最大
        if (b === 1) return 1;
        return b - a;
    };
    
    possibleThrees.sort(compareCards);
    possiblePairs.sort(compareCards);
    
    // 尝试每一种组合，找到最大的合法葫芦
    for (const three of possibleThrees) {
        for (const pair of possiblePairs) {
            // 跳过使用同一个数字的情况
            if (three === pair) {
                // 检查这个数字是否有足够的牌可以同时作为三张和对子
                if (countMap.get(three) < 5) continue;
            }
            
            // 计算牌面值之和
            const sum = three * 3 + pair * 2;
            if (sum <= max) {
                return [three, pair];
            }
        }
    }
    
    // 没有找到合法的葫芦组合
    return [0, 0];

    
}

function main() {
    // Add your test cases here
    console.log(JSON.stringify(solution(9, 34, [6, 6, 6, 8, 8, 8, 5, 5, 1])) === JSON.stringify([8, 5]));
    console.log(JSON.stringify(solution(9, 37, [9, 9, 9, 9, 6, 6, 6, 6, 13])) === JSON.stringify([6, 9]));
    console.log(JSON.stringify(solution(9, 40, [1, 11, 13, 12, 7, 8, 11, 5, 6])) === JSON.stringify([0, 0]));
}

main();
