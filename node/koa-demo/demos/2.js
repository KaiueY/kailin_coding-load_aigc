const koa = require('koa');
const app = new koa();
const fs = require('fs')


const main =  (ctx) =>{
    if( ctx.url === '/home'){
        ctx.body='hello hemo'
    }
    else if (ctx.url ==='/'){
        ctx.body = 'hello World'
    }
    else if (ctx.url==='/about'){
        // const content = fs.readFileSync('./about.html')
        // ctx.body = content.toString()
        const content = fs.createReadStream('./about.html')
        ctx.body = content
    }
}
app.use(main)

app.listen(3000,()=>{
    console.log('server is running at 3000');
    
})