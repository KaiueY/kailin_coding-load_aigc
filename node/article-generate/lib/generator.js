const { randomInt, createRandomPicker } = require('./random')

// 生成文章
function generate(title, { corpus, min = 1000, max = 2000 }) {
    const articleLength = randomInt(min, max)
    const { famous, bosh_before, bosh, conclude, said } = corpus

    const [pickFamous, pickBoshBefore, pickBosh, pickConclude, pickSaid]
        = [famous, bosh_before, bosh, conclude, said].map(createRandomPicker)
    const article = []
    let totalLength = 0
    //生成文章 当字数达到时返回
    while (totalLength < articleLength) {
        let section = ''
        const sectionLength = randomInt(300, 500)
        while (section.length < sectionLength) {
            const n = randomInt(0, 100)
            // 20% 名言
            if (n < 20) {
                section += sentence(pickFamous, { said: pickSaid, conclude: pickConclude })
            }
            // 20% 废话之前
            else if (n < 40) {
                section += sentence(pickBoshBefore, { title: title }) + sentence(pickBosh, { title: title })
            } else
            // 20% 废话
            {
                section += sentence(pickBosh, { title: title })
            }
        }
        totalLength += section.length
        article.push(section)
    }
    return article

}
// 替换文本 文字中有这种 {{}} 需要替换
function sentence(pick, replacer) {
    let res = pick()
    for (let key in replacer) {
        // new RegExp(`{{${key}}}`,'g') // 正则 需要替换的字符串 
        // replace[key]() //函数
        // 替换
        res = res.replace(new RegExp(`{{${key}}}`, 'g'),
            typeof replacer[key] === 'function' ? replacer[key]() : replacer[key])

    }
    return res

}

module.exports = {
    generate,
    sentence,
}