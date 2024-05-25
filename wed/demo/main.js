//require是node里面的关键字  引入模块
//从本地 node_moudles 引入openai模块
const OpenAI = require('openai')
require('dotenv').config();
//环境变量
// console.log(process.env.OPENAI_API_KEY,'-------');
const client = new OpenAI({
    apiKey: 'sk-1BC3MChyLLOG7AokRwUViMCmecodKJiL0EOXKJdI724rOhjO',
    baseURL: 'https://api.chatanywhere.tech/v1'
})
const getChatResponse=async function(model,prompt){
    const response = await client.chat.completions.create({
        model: model, //适合聊天的模型  指定一种模型
        messages: [
            {
                role: 'user',
                content: prompt
            }
        ]

    })
    return response
}


// 入口函数
async function main(){
    // es6  `` 模板字符串 动态解析 
    // 支持多行 适合详细设置Prompt

    let text=`
    您应该提供尽可能清晰、具体的指示、以表达您希望模型执行的任务\
    这将引导模型朝向所需的输出。并降低收到无关或不正确响应的可能性。\
    不要讲写清晰地提示词与简短的提示词混淆。\
    在许多情况下，更长的提示词可以为模型提供跟多的清晰度和上下文信息，
    从而导致更详细和相关的输出

    `
    // LLM 的 NLP 总结能力
    // 转译
    let prompt=`
    把用三个反引号括起来的文本总结成一句话,20字以内，输出英文。
    \`\`\`${text}\`\`\`
    `
    const chatCompletion = await getChatResponse('gpt-3.5-turbo',prompt)
    console.log(chatCompletion.choices[0].message.content);
    let prompt2=`
    您的任务是以一致的风格回答问题。

    <孩子>: 教我耐心。

    <祖父母>: 挖出最深峡谷的河流源于一处不起眼的泉眼；最宏伟的交响乐从单一的音符开始；最复杂的挂毯以一根孤独的线开始编织。

    <孩子>: 教我韧性。
    `
    const response2=await getChatResponse('gpt-3.5-turbo',prompt2)
    console.log(response2.choices[0].message.content);
}
main()