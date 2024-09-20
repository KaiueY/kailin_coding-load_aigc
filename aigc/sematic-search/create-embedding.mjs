import fs from 'fs/promises'//promisfy
import OpenAi from 'openai'
import dotenv from 'dotenv'

dotenv.config({
    path:'.env'
})

const client = new OpenAi({
    apiKey:process.env.OPENAIA_KEY,
    baseURL: process.env.BASE_URL
})

const inputFilePath = './data/posts.json'
const outputFilePath = './data/posts_with_embedding.json'

const data = await fs.readFile(inputFilePath,'utf-8')
const posts = JSON.parse(data)

const postsWithEmbedding = []
for(const {title,catagory} of posts){
    const respons = await client.embeddings.create({
        model:'text-embedding-ada-002',
        input:`标题${title};分类:${catagory}`
    })
    postsWithEmbedding.push({
        title,
        catagory,
        embedding:respons.data[0].embedding
    })
}
await fs.writeFile(outputFilePath,JSON.stringify(postsWithEmbedding))

