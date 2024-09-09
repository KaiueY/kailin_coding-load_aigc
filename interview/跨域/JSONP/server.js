const http = require('http')

http.createServer(function(req,res){
    const query = new URL(req.url,`http://${req.headers.host}`).searchParams
    const cb = query.get('callback')

    if(cb){
        const data = {
            name:'kailin',
            age:22
        }
        const result = `${cb}('${JSON.stringify(data)}')`// callback()
        res.end(result)
    }
    
    
}).listen(3000)