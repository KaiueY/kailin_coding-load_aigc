const findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let gi = 0; // 孩子数
    let sj = 0; // 饼干数
    let res = 0;
    while (gi < g.length && sj < s.length) {
        // 当饼干 sj >= 胃口 gi 时，饼干满足胃口，更新满足的孩子数并移动指针
        if (s[sj] >= g[gi]) {
            gi++;
            sj++;
            res++;
        } else {
            // 当饼干 sj < 胃口 gi 时，饼干不能满足胃口，需要换大的
            sj++;
        }
    }
    return res;
};