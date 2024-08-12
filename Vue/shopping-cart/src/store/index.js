import { createStore } from 'vuex'
// vuex pinia更复杂 中央仓库的概念  store 单例 单一状态舒
import cart from './modules/cart.js'
import products from './modules/products.js'

// 仓库
// 分子仓
export default createStore({
    // 全局状态
    state: {
        count: 0
    },
    modules: {
        cart,//购物车状态
        products,//商品状态
    },
})
