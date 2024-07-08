export const chat = async (messages, apiKey) => {
    try {
        const result = await fetch("https://api.302.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 授权信息
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: messages
            })
        })

        const data = await result.json()
        console.log(data);
        return data.choices[0].message.content
    } catch(err) {
        throw(err)
    }
}