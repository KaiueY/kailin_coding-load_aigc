import readline from 'readline'
import OpenAi from 'openai'
import dotenv from 'dotenv'
import fs from 'fs/promises'

const inputFilePath = './data/posts_with_embedding.json'

const data = await fs.readFile(inputFilePath,'utf-8')
const posts = JSON.parse(data)

dotenv.config({
    path:'.env'
})

const client = new OpenAi({
    apiKey:process.env.OPENAIA_KEY,
    baseURL: process.env.BASE_URL
})
// 计算向量的余弦相似度
const cosineSimilarity = (v1, v2) => {
    // 计算向量的点积
    const dotProduct = v1.reduce((acc, curr, i) => acc + curr * v2[i], 0);
  
    // 计算向量的长度
    const lengthV1 = Math.sqrt(v1.reduce((acc, curr) => acc + curr * curr, 0));
    const lengthV2 = Math.sqrt(v2.reduce((acc, curr) => acc + curr * curr, 0));
  
    // 计算余弦相似度
    const similarity = dotProduct / (lengthV1 * lengthV2);
  
    return similarity;
  };
  

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})



const handleInput = async (input) =>{
    // console.log(input)
    const respons = await client.embeddings.create({
        model:'text-embedding-ada-002',
        input:input
    })
    const {embedding} =respons.data[0]

    const result = posts.map(item =>({
        ...item,
        similarity:cosineSimilarity(embedding,item.embedding)
    }))
    .sort((a,b)=>a.similarity - b.similarity)
    .reverse()
    .slice(0,3)
    .map((item,index)=>`${index+1}.${item.title},${item.category}`)
    .join('\n')
    console.log(`\n${result}\n`);
    rl.question('\n',handleInput)
}
rl.question('\n 请输入要搜索的内容:',handleInput)       