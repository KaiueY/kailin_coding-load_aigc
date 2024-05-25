// console.log('后端服务启动了')
//require关键字   首字母大写 类  js大小写区分
const OpenAI = require('openai')// 实例化
const client = new OpenAI({ //对象字面量
    //凭证 密钥 算力收费 token
    apiKey: 'sk-0icNotaB0sMgI1xQmk5wAV4iXbgHSH9NV3zmAdI1OJPxFPBQ',
    baseURL: 'https://api.chatanywhere.tech/v1'

})
//入口主函数
// main函数内部会有异步任务 async+await 

async function main() {
    //和AI聊天 从编程思维->AI编程思维->AIGC->AGI
    //client 是openai 对象 
    // LLM 是在远程运行 await
    // 字符串模版 设置一个提示词
    const prompt=`
    <table width="100%" class="">
        <tbody><tr class="item">
            <td width="100" valign="top">
                

                    <a class="nbg" href="https://movie.douban.com/subject/35503073/" title="对你的想象">
                        <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2905327559.webp" width="75" alt="对你的想象" class="">
                    </a>
            </td>

            <td valign="top">
                

                <div class="pl2">

                    <a href="https://movie.douban.com/subject/35503073/" class="">
                        对你的想象
                        / <span style="font-size:13px;">关于你的想法 / 概念中的你</span>
                    </a>



                    <p class="pl">2024-03-16(西南偏南电影节) / 2024-05-02(美国网络) / 安妮·海瑟薇 / 尼古拉斯·加利齐纳 / 艾拉·鲁宾 / 安妮·玛莫罗 / 瑞德·斯科特 / 帕芮·马费尔德 / 乔丹·亚伦·霍尔 / 玛蒂尔达·吉安诺普洛斯 / Meg Millidge / 奇克·曼诺哈 / Ray Cham / Jaiden...</p>

                    


                        
                        <div class="star clearfix">
                                <span class="allstar30"></span>
                                <span class="rating_nums">5.9</span>
                                <span class="pl">(21308人评价)</span>

                        </div>


                </div>

            </td>
        </tr>
    </tbody></table>
    则是一段电影html，请获取电影名（name）、封面（picture）、简介（info）、演员（actors）、评分（score）、
    请使用括号的单词作为属性名，以JSON的格式返回。
    
    `

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
main();