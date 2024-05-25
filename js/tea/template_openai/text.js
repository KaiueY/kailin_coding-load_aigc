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

function Tea(type, add) {
    this.type = type;
    this.add = add || '无';
    this.process = `我准备泡一杯${this.type}`;
}

Tea.prototype.init = function () {
    this.process += `，需要添加：${this.add}`;
    return this.process;
}

// 实例化
var greenTea = new Tea('卡布奇诺', "甜甜的你");
const main = async () => {
    const prompt = `
    你将获得由三个引号括起来的文本。
    如果它包含一个制作饮料的想法，请你提供步骤如
    第一步 - ...
    第二步 - ...
    ...   - ...
    如果文本不包含一个想法 则直接写“没意思”
    """"${greenTea.init()}"""
    `
    const chatCompletion = await getChatResponse('gpt-3.5-turbo', prompt)
    console.log(chatCompletion);
}

main();