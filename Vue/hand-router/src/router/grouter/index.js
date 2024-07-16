import { inject, ref } from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

// 1.创建一个插件
export const createRouter = (options) => {
    return new Router(options)
}
export const createWebHashHistory = () => {

    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)
    }
    // history 对象
    return {
        url: window.location.hash.slice(1) || '/',
        bindEvents
    }
}
// 标记一下 router 向外暴露 
const ROUTER_KEY = '__router__'
export const userRouter = () => {
    return inject(ROUTER_KEY)
}


class Router {
    constructor(options) {
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)
        this.history.bindEvents(() => {
            // console.log('hash change')
            this.current.value = window.location.hash.slice(1) || '/'
        })
    }

    // use 调用 插件的install方法
    install(app) {
        //全局暴露一个router  全局使用的对象 this
        app.provide(ROUTER_KEY,this)
        console.log('Router installed', app)
        app.component('router-link', RouterLink)
        app.component('router-view', RouterView)
    }
}