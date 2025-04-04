import KoaWebsocket from "koa-websocket";
import Koa from "koa";

const app = KoaWebsocket(new Koa());
const client = new Set()



app.use(async (ctx)=> {
    ctx.body = 
    `
    <html>
        <head>
            <title>WebSocket</title>
        </head>
        <body>
            <h1>WebSocket</h1>
            <div id = "messages" style="height:300px;overflow-y:scroll"> 
                <input id="message"  type="text" />
                <button id="send" onClick= "sendMessage()">Send</button>
            </div>
            <script>
                const ws = new WebSocket("ws://localhost:3000");
                ws.onmessage = (event) => {
                    console.log(event);
                    const messages = document.getElementById("messages");
                    messages.innerHTML += event.data + "<br>";
                }
                const sendMessage = () => {
                        const message = document.getElementById("message").value.trim();
                        console.log(message);
                        ws.send(message);
                        }
                        
                        
            </script>
        </body>
    </html>
    `;
})
app.ws.use((ctx,next)=>{
    client.add(ctx.websocket);
    ctx.websocket.on('message',(message)=>{
        console.log(message);
        client.forEach((client)=>{
            // console.log(client);
            
            client.send(message.toString());
        })
    })
    ctx.websocket.on('close',()=>{
        console.log('close');
        
        client.delete(ctx.websocket);
    })
    
})
app.listen(3000,()=> {
    console.log("listen 3000");
});