const { generate } = require('./lib/generator.js');
const { createRandomPicker } = require('./lib/random.js')
const { saveCorpus,loadCorpus } = require('./lib/corpus.js')

let article = []
function handleArticle(){
    const corpus = loadCorpus('corpus/data.json')
    const title = createRandomPicker(corpus.title)()
    article.push(...generate(title, { corpus }));
    saveCorpus(title, article)
    return article
}

module.exports = {
    article,
    handleArticle
}
// //异步读取文件
// const content = fs.readFile(_path, { encoding: 'utf-8' }, (err, data) => {
//     if (!err) {
//         const article = generate()
//     }
// })