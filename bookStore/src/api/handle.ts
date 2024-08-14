type AIResult = {
    bot_id: string;
    chat_id: string;
    content: string;
    content_type: string;
    conversation_id: string;
    id: string;
    role: string;
    type: string;
}
// coze返回结果处理函数 
export const handleAIResult = (result: AIResult[]) => {
    const answer: any = [];
    const follow_up: string[] = [];
    // console.log(result);

    result.forEach((item) => {
        if (item.type === "answer") {
            const msg = item.content;
            // 代表有图片
            if (msg.indexOf("![]") != -1) {
                const arr = msg.split("![]");
                answer.push({
                    type: 1,
                    content: arr[0]
                });
                arr[1] = arr[1].substring(1, arr[1].length - 1);
                const imgElement = `<img src="${arr[1]}"/>`;
                answer.push({
                    type: 1,
                    content: imgElement
                });
            }
            else {
                answer.push({
                    type: 1,
                    content: item.content
                });
            }
        } else if (item.type === "follow_up") {
            follow_up.push(item.content);
        }
    })
    return {
        answer,
        follow_up
    }
}