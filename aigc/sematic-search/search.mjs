import readline from 'readline'; // 用于读取用户输入
import OpenAI from 'openai'; // OpenAI 的 Node.js 客户端库
import dotenv from 'dotenv'; // 用于加载环境变量
import fs from 'fs/promises'; // 用于异步文件系统操作

// 输入文件路径
const inputFilePath = './data/posts_with_embedding.json';

// 读取并解析 JSON 文件
const data = await fs.readFile(inputFilePath, 'utf-8');
const posts = JSON.parse(data);

// 加载环境变量
dotenv.config({
    path: '.env' // 环境变量文件路径
});

// 创建 OpenAI 客户端
const client = new OpenAI({
    apiKey: process.env.OPENAIA_KEY, // 从环境变量中获取 API 密钥
    baseURL: process.env.BASE_URL // 从环境变量中获取基础 URL
});

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

// 创建 readline 接口
const rl = readline.createInterface({
    input: process.stdin, // 标准输入
    output: process.stdout // 标准输出
});

// 处理用户输入
const handleInput = async (input) => {
    // 使用 OpenAI API 获取输入文本的嵌入
    const response = await client.embeddings.create({
        model: 'text-embedding-ada-002', // 模型名称
        input: input // 用户输入
    });

    // 提取嵌入向量
    const { embedding } = response.data[0];

    // 计算每个帖子与输入文本的相似度，并排序
    const result = posts.map(item => ({
        ...item, // 保留原帖子的所有属性
        similarity: cosineSimilarity(embedding, item.embedding) // 添加相似度属性
    }))
    .sort((a, b) => a.similarity - b.similarity) // 按相似度升序排序
    .reverse() // 反转数组，使最相似的在前
    .slice(0, 3) // 取前三条结果
    .map((item, index) => `${index + 1}. ${item.title}, ${item.category}`) // 格式化输出
    .join('\n'); // 将结果连接成字符串

    // 打印结果
    console.log(`\n${result}\n`);

    // 继续询问用户输入
    rl.question('\n', handleInput);
};

// 启动程序，询问用户输入
rl.question('\n 请输入要搜索的内容:', handleInput);