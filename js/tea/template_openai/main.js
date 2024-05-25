//require是node里面的关键字  引入模块
//从本地 node_moudles 引入openai模块
const OpenAI = require('openai')
require('dotenv').config();
//环境变量
// console.log(process.env.OPENAI_API_KEY,'-------');
const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    baseURL: 'https://api.chatanywhere.tech/v1'
})
const getChatResponse = async function (model, prompt) {
    const response = await client.chat.completions.create({
        model: model, //适合聊天的模型  指定一种模型
        messages: [
            {
                role: 'user',
                content: prompt
            }
        ]

    })
    return response.choices[0].message.content
}

const main = async () => {
    const text = `
    泡一杯茶很容易,首先需要把水烧开。
    在等待的过程中，把茶包放入一个杯子。
    一旦水烧开了，就把它倒在茶包上，
    等待一会，让茶包浸泡，几分钟后，取出茶包，
    如果你愿意，加一些蔗糖或牛奶调味，
    就这样，你可以享受一杯每位的茶了
    `
    const prompt = `
    你将获得由三个引号括起来的文本。
    如果它包含了一系列的指令，则需要按照以下格式重新编写这些指令，
    第一步 - ...
    第二步 - ...
    ...   - ...
    如果文本不包含一系列指令 则直接写“未提供步骤”
    """"${text}"""
    `
    const chatCompletion = await getChatResponse('gpt-3.5-turbo', prompt)
    console.log(chatCompletion);
}

main();