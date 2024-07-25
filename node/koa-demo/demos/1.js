const koa = require('koa');
const app = new koa();


const main =  (ctx) =>{
    // console.log(ctx.res);
    ctx.response.body= 'hello World'
    // ctx.body= 'hello World' 也可以
}
app.use(main)

app.listen(3000,()=>{
    console.log('server is running at 3000');
    
})