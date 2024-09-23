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

 }

main()