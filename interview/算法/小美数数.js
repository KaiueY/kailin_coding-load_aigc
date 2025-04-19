function solution(n, arr) {
    let zInput = 0
    let nInput = 0
    // 记录每个元素的原始索引
    const arrWithIndex = arr.map((value, idx) => ({ value, idx }));
    // 按值排序
    arrWithIndex.sort((a, b) => a.value - b.value);

    for (let i = 1; i < n; i++) {
        if (arrWithIndex[i].idx > arrWithIndex[i - 1].idx) {
            zInput++;
        } else {
            nInput++;
        }
    }
    console.log(zInput, nInput);
}
solution(5, [5, 2, 8, 1, 6])