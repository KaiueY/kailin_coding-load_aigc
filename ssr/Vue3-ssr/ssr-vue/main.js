const express = require('express')
const Vue = require("vue")
const renderer = require("@vue/server-renderer")
const vue3Compile = require("@vue/compiler-ssr")


const app = express()

const vueapp = {
    template: `<div>
    <h1 @click="add">{{num}}</h1>
    <ul>
        <li v-for="(todo,n) in todos">{{n+1}}--{{todo}}</li>
    </ul>
    </div>
    `,
    data() {
        return {
            num: 1,
            todos: ['吃饭', '睡觉', '学习vue']
        }
    },
    methods: {
        add() {
            this.num++
        }
    }
}

vueapp.ssrRender = new Function('require',
    vue3Compile.compile(vueapp.template).code)(require)

// 路由中间件
app.get('/', async function (req, res) {
    // ssr APP 创建
    let vapp = Vue.createSSRApp(vueapp)
    let html = await renderer.renderToString(vapp)
    const title = 'Vue3-ssr'
    let ret = `
<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <div id="#app">
            ${html}
        </div>
    </body>
</html>
    `

    res.send(ret)
})


app.listen(1314, () => {
    console.log('server is running at 1314');
})


