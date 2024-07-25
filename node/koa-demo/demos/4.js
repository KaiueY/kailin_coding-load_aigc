const Koa = require('koa');
const app = new Koa()

const one = (ctx,next) => {
    console.log(1);
    next()
    console.log(2)
}

const two = (ctx,next) =>{
    console.log(3)
    next()
    console.log(4)
}

const three = (ctx,next) =>{
    console.log(5)
    next()
    console.log(6)
}

app.use(one)
app.use(two)
app.use(three)

app.listen(3000, () => {
  console.log('listening on 3000');
})