const fs = require('fs');
const path = require('path');

function loadCorpus(src) {
    const _path = path.resolve(__dirname,'..', src)
    const data = fs.readFileSync(_path, 'utf8')
    return JSON.parse(data)
}

// 保存文章
function saveCorpus(title, article) {
    const _path = path.resolve(__dirname, '..','output');
    // 检查目录是否存在
    if (!fs.existsSync(_path)) {
        fs.mkdirSync(_path); // 如果目录不存在，则创建
    }
    const time = Date.now
    const file = path.resolve(_path, `${title}${time}.txt`);

    const text = `${title}\n\n       ${article.join('\n       ')}`;
    fs.writeFileSync(file, text);
}
module.exports = {
    loadCorpus,
    saveCorpus
}