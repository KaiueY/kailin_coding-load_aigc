const request = require('request-promise') //引入模块
const cheerio = require('cheerio')
//AIGC LLM生成式内容
// tr字符串要生成movie json对象
// input prompt 
const OpenAI = require('openai')// 实例化

const { log } = require('console')
const client = new OpenAI({ //对象字面量
    //凭证 密钥 算力收费 token
    apiKey: 'sk-0icNotaB0sMgI1xQmk5wAV4iXbgHSH9NV3zmAdI1OJPxFPBQ',
    baseURL: 'https://api.chatanywhere.tech/v1'

})
//入口文件
// 异步de
// 将豆瓣网页的电影列表html，爬取
// 返回JSON数组
// 单点入口

async function main() {
    // 代码 分步细化需求  伪代码：
    // 根据URL发送http请求  拿到html
    // 根据html 分析 拿到电影内容 
    // 返回内容
    // await LLM
    // 用const而不是let 生命常量
    const URL = 'https://movie.douban.com/chart'
    // 发送http请求 拿到html 408
    const html = await request({
        url: URL

    })


    // 空行 有利于代码可读性
    // html分析 document + 选择器 +cheerio 满足
    // 将html字符串加载到内存 $ 相当于Document
    let $ = cheerio.load(html)
    // console.log($('.article table').length);
    const movieNodes = $('#content .article .item')
    let movie_html=''
    for(let i=0;i<2;i++){
        movie_html+=cheerio.load(movieNodes[i]).html()
    }
    // console.log(movie_html);
    let prompt=`
    ${movie_html}
    这是一段电影列表html，
    请获取电影名（name）、封面链接（picture）、简介（info）、评分（score）、评论人数（commentsNumber）
     请使用括号内的单词为属性名，以JSON数组的格式返回`
    const chatCompletion = await client.chat.completions.create({
        model: 'gpt-3.5-turbo', //适合聊天的模型  指定一种模型
        messages: [
            {
                role: 'user',
                content: prompt
            }
        ]

    })
    console.log(chatCompletion.choices);
    // const movieList = []
    // console.log($('#content .article .item').length)
//     for (let i = 0; i < movieNodes.length; i++) {
//         //封装
//         // 将一段电影的html解析 剥离出去，
//         // 这段功能相对独立 复用的
//         // 因为main函数已经比较复杂  一个代码超过十行  可以分离函数
//         movieList.push(getMovieInfo(movieNodes[i]))
//     }
//     console.log(movieList);
 }
const getMovieInfo = function (node) {
    let movieInfo = {}
    //将tr加载进内存
    let $$ = cheerio.load(node)
    let title = $$('.pl2 a').text()
    let pic = $$('.nbg img').attr('src')
    let info = $$('p.pl').text()
    let rating_nums = $$('.rating_nums').text()
    // JavaScript中的对象是一种动态创建的数据结构，
    // 在给对象添加属性时，
    // 如果该属性尚未存在，JavaScript会自动创建它。
    movieInfo.title = title
    movieInfo.pic = pic
    movieInfo.info = info
    movieInfo.rating_nums = rating_nums

    // console.log(pic);
    return movieInfo
}

main()