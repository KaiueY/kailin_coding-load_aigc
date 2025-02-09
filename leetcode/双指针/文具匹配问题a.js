// https://www.marscode.cn/practice/lnnw7dyrov7624?problem_id=7424418560929693740
function solution(n, m, a, b) {
    const penCount = new Map();
    const notebookCount = new Map();
    let wildPens = 0, wildNotebooks = 0;
    let remainingPens = 0, remainingNotebooks = 0;
    
    // 统计笔的数量
    for (let color of a) {
        if (color === -1) {
            wildPens++;
        } else {
            penCount.set(color, (penCount.get(color) || 0) + 1);
        }
    }

    // 统计本子的数量
    for (let color of b) {
        if (color === -1) {
            wildNotebooks++;
        } else {
            notebookCount.set(color, (notebookCount.get(color) || 0) + 1);
        }
    }
    
    let result = 0;
    
    // 直接匹配相同颜色的笔和本子
    for (let [color, pens] of penCount) {
        const notebooks = notebookCount.get(color) || 0;
        const matches = Math.min(pens, notebooks);
        result += matches;
        remainingPens += pens - matches;
        remainingNotebooks += notebooks - matches;
    }

    // 计算剩余未匹配的笔和本子（已统计的颜色不需要再遍历）
    for (let [color, notebooks] of notebookCount) {
        if (!penCount.has(color)) {
            remainingNotebooks += notebooks;
        }
    }

    // 使用 wildPens 匹配剩余的本子
    const wildPenMatches = Math.min(wildPens, remainingNotebooks);
    result += wildPenMatches;
    remainingNotebooks -= wildPenMatches;

    // 使用 wildNotebooks 匹配剩余的笔
    const wildNotebookMatches = Math.min(wildNotebooks, remainingPens);
    result += wildNotebookMatches;
    remainingPens -= wildNotebookMatches;

    // wildPens 和 wildNotebooks 互相匹配
    result += Math.min(wildPens - wildPenMatches, wildNotebooks - wildNotebookMatches);
    
    return result;
}

function main() {
    console.log(solution(3, 4, [1, 2, 3], [2, 2, 3, -1]) === 3);
    console.log(solution(2, 3, [5, -1], [5, 5, 7]) === 2);
    console.log(solution(4, 4, [8, 9, 10, 11], [12, -1, -1, 8]) === 3);
}

main();