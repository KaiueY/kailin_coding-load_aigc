function solution(n, template_, titles) {
    // 提取模板中的固定词
    const fixWords = template_.split(/[{][^{}]*[}]/); // 按通配符分割获取固定词
    const startsWithWildcard = template_.startsWith("{");
    const endsWithWildcard = template_.endsWith("}");

    // 判断单个标题是否匹配模板
    const isMatch = (title) => {
        let index = 0;

        // 遍历固定词，检查是否按顺序出现在标题中
        for (const word of fixWords) {
            if (word === "") continue; // 跳过空固定词
            index = title.indexOf(word, index);
            if (index === -1) {
                return false; // 找不到固定词，返回 false
            }
            index += word.length; // 更新查找起点
        }

        // 检查标题是否需要匹配固定词开头和结尾
        if (!startsWithWildcard && !title.startsWith(fixWords[0])) {
            return false;
        }
        if (!endsWithWildcard && !title.endsWith(fixWords[fixWords.length - 1])) {
            return false;
        }

        return true;
    };

    // 对每个标题进行判断
    const results = titles.map((title) => (isMatch(title) ? "True" : "False"));
    return results.join(",");
}

function main() {
  //  You can add more test cases here
  const testTitles1 = ["adcdcefdfeffe", "adcdcefdfeff", "dcdcefdfeffe", "adcdcfe"];
  const testTitles2 = ["CLSomGhcQNvFuzENTAMLCqxBdj", "CLSomNvFuXTASzENTAMLCqxBdj", "CLSomFuXTASzExBdj", "CLSoQNvFuMLCqxBdj", "SovFuXTASzENTAMLCq", "mGhcQNvFuXTASzENTAMLCqx"];
  const testTitles3 = ["abcdefg", "abefg", "efg"];

  console.log(solution(4, "ad{xyz}cdc{y}f{x}e", testTitles1) === "True,False,False,True");
  console.log(solution(6, "{xxx}h{cQ}N{vF}u{XTA}S{NTA}MLCq{yyy}", testTitles2) === "False,False,False,False,False,True");
  console.log(solution(3, "a{bdc}efg", testTitles3) === "True,True,False");
}

main();