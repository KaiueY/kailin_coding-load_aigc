import API from '../../api/shop.js'

const state = {
    all: []
}

const getters = {

}

const actions = {
    // api请求 -> 提交mutations
    // commit 是vuex给actions 可以commit mutations 的 API
    getAllProducts({ commit }) {
        API.getProducts((products) => {
            console.log(products);
            commit('setProducts', products)

        })
    }
}
// 这就是vuex比pinia复杂的地方 
// 规定了数据的改变规则
const mutations = {
    setProducts(state, products) {
        state.all = products
    },
    decrementProductInventory(state,{id}){
        const product = state.all.find(product =>product.id===id)
        product.inventory--
        
    }
}
// store.product.all 
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}