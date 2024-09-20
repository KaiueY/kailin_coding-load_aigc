import OpenAi from 'openai'
import dotenv from 'dotenv'

dotenv.config({
    path:'.env'
})

const client = new OpenAi({
    apiKey:process.env.OPENAIA_KEY,
    baseURL: process.env.BASE_URL
})
// embeddings 将语言文字转换成数学向量
const response =await client.embeddings.create({
    // 嵌入向量
    model:'text-embedding-ada-002',
    // 
    input:'百度前端面试题'
    
})
console.log(response.data[0].embedding);
