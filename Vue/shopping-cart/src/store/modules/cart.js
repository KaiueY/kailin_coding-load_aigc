const state = {
    items: []


}

const getters = {
    cartProducts : (state,getters,rootState)=>{
        return state.items.map(({id,quantity})=>{
            const product = rootState.products.all.find(product => product.id===id)
            return {
                id:product.id,
                title:product.title,
                price:product.price,
                quantity
            }
        })
    },
    cartTotalPrice :(state,getters)=>{
        // reduce
        return getters.cartProducts.reduce((total,product)=>{
            return total+product.price*product.quantity
        },0)
    }
}

const actions = {
    addProductToCart({ commit, state }, product) {
        // console.log(obj.rootState.count,'-----------');
        // console.log(commit);
        console.log(state, '-----');

        if (product.inventory > 0) {
            // 找找是否添加过
            const cartItem = state.items.find(item => item.id === product.id)
            // 没添加过就添加一个卡片在购物车🛒
            if (!cartItem) {
                // 新添加到购物车
                commit('pushProductToCard', { id: product.id })
            } else {
                // 否则直接数量加一
                commit('incrementItemQuantity', cartItem)
            }
            commit('products/decrementProductInventory',
                { id: product.id }, { root: true }
            )
        }


    }
}
// 这就是vuex比pinia复杂的地方 
// 规定了数据的改变规则
const mutations = {
    pushProductToCard(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, cardItem ) {
        // const cartItem = state.items.find(item => item.id ===id)
        cardItem.quantity++
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