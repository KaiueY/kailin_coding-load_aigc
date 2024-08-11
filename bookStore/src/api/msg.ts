import axios from '@/api/axios';


//发送消息
export function sentMsg(msg: string): Promise<any> {
    // console.log(msg);
    return axios.post("/v3/chat", {
        bot_id: "7400378730700554251",
        user_id: "123",
        stream: false,
        auto_save_history: true,
        KeepAlive: true,
        additional_messages: [
            {
                role: "user",
                content: msg,
                content_type: "text",
            },
        ],
    });
}

// 以下为查询消息相关函数
//查询消息详细信息
export function getMsg(conversation_id: string, chat_id: string) {
    return axios.get("/v3/chat/message/list", {
        params: {
            conversation_id,
            chat_id,
        }
    })
}
// 查询当前对话状态
function queryMsg(conversation_id: string, chat_id: string) {
    return axios.get("/v3/chat/retrieve", {
        params: {
            conversation_id,
            chat_id,
        }
    })
}
//判断消息是否完成
export function queryMsgCompleted(conversation_id: string, chat_id: string, time: number) {
    return getMsgCompleted(conversation_id, chat_id, time);
}
// 每隔一段时间查询一次，直到有数据返回
function getMsgCompleted(conversation_id: string, chat_id: string, time: number) {
    let maxTime = 8; // 最大尝试次数
    return new Promise((resolve, reject) => {
        (function attemptGetMsg(attemptTime) {
            setTimeout(async () => {
                try {
                    let result = await queryMsg(conversation_id, chat_id);
                    if (result.data.status === 'completed') {
                        resolve(result); // 成功获取数据，解决整个Promise链
                    } else if (attemptTime > maxTime) {
                        reject(result); // 超过最大尝试次数，拒绝整个Promise链
                    } else {
                        attemptGetMsg(attemptTime + 1); // 尝试次数加1，继续递归
                    }
                } catch (error) {
                    reject(error); // 处理queryMsg抛出的错误
                }
            }, time);
        })(1); // 从第1次尝试开始
    });
}
