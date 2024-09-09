const WebSocket = require('ws');
const ws = new WebSocket.Server({ port: 3000 });
let count = 0;
ws.on('connection',(obj)=>{
    obj.on('message',(data)=>{
        obj.send('this is a message from WebSocket server')
        setInterval(()=>obj.send(count++),2000)
    })
})