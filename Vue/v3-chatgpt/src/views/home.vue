<template>
    <div class="flex flex-col h-screen">
        <div class="flex flex-nowrap fixed w-full items-baseline 
        top-0 px-6 py-4 bg-gray-100">
            <div class="text-2xl font-bold">
            ChatGPT
            </div>
            <div class="ml-4 text-sm text-gray-500">
                基于OpenAI的ChatGPT自然语言模型人工智能对话
            </div>
            <div class="ml-auto px-3 py-2 text-sm 
            cursor-pointer hover:bg-white rounded-md"
                @click="clickConfig()"
            >
                设置
            </div>
        </div>
        <div class="flex-1 mx-2 mt-20 mb-2">
            <div
                v-for="item of messageList.filter((v) => v.role != 'system')" 
                class="group flex flex-col px-4 py-3 rounded-lg">
                <div class="flex justify-between item-center mb-2">
                    {{ item.role }}
                    <div>
                    {{item.content}}
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky bottom-0 w-full p-6 pb-8 bg-gray-100">
            <div class="mb-2 text-sm text-gray-500" v-if="isConfig">
                请输入API KEY:
            </div>
            <div class="flex">
                <input 
                    v-model="messageContent"
                    class="input flex-1" 
                    :type="isConfig?'password':'text'" 
                    :placeholder="isConfig?'sk-xxxxxx':'请输入'" 
                    @keydown.enter="save()"
                /> 
                <button class="btn ml-4" :disabled="isTalking" @click="sendOrSave()">保存</button>
            </div>
        </div>
    </div>
    </template>
    <script setup>
    import { ref, onMounted } from 'vue'
    import { chat } from '../libs/gpt'
    
    onMounted(() => {
        if (getApiKey()) {
            isConfig.value = false
        }
    })
    
    const saveAPIKey = (apiKey) => {
        localStorage.setItem('apiKey', apiKey);
        return true;
    }
    
    const getApiKey = () => {
        return localStorage.getItem('apiKey');
    }
    
    const isConfig = ref(true) // true api-key 设置 false 聊天
    const messageContent = ref('')
    const isTalking = ref(false) // llm 正在返回
    
    const clickConfig = () => {
        isConfig.value = true
        messageContent.value = ''
    }
    const sendOrSave = () => {
        if  (!messageContent.value.length) return ;
        if (isConfig.value) {
            // save api-key
            if (saveAPIKey(messageContent.value.trim())) {
                isConfig.value = false
            }
            messageContent.value = ''
        } else {
            // send message
            sendMessage()
        }
    }
    
    const messageList = ref([
        {
            role:'system',
            content: "你是人工智能客服，请尽可能简洁回答问题"
        },
        {
            role: 'assistant',
            content: `你好，我是AI语言模型，我可以提供一些常用服务和信息，例如：
    
    1. 翻译：我可以把中文翻译成英文，英文翻译成中文，还有其他一些语言翻译，比如法语、日语、西班牙语等。
    
    2. 咨询服务：如果你有任何问题需要咨询，例如健康、法律、投资等方面，我可以尽可能为你提供帮助。
    
    3. 闲聊：如果你感到寂寞或无聊，我们可以聊一些有趣的话题，以减轻你的压力。
    
    请告诉我你需要哪方面的帮助，我会根据你的需求给你提供相应的信息和建议。
    `
        }
    ])
    
    const sendMessage = async () => {
        const message = messageContent.value.trim();
        try {
            isTalking.value = true
            messageList.value.push({
                role: 'user',
                content: message
            })
            const data = await chat(messageList.value, getApiKey())
            messageList.value.push({
                role: 'assistant',
                content: data
            })
            messageContent.value = ""
        } catch(err) {
    
        } finally {
            isTalking.value = false;
        }
        
        
    }
    
    
    
    </script>
    <style>
    </style>