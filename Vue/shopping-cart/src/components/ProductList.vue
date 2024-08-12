<template>
    <ul>
        <li 
            v-for="product in products"
            :key="product.id">
            {{product.title}} - {{product.price}}
            <br>
            <button
                :disabled="!product.inventory"
                @click="addProductToCart(product)"
            >
            Add to Cart
            </button>
        </li>
    </ul>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const products = computed(() => store.state.products.all);
onMounted(() => {
    store.dispatch('products/getAllProducts');
})

const addProductToCart = (product) => {
    // 修改  dispatch action -> commit mutation 
    // 共享  + 数据状态的正确性 
    // inventory -1  
    // cart + 1
    store.dispatch('cart/addProductToCart', product)
}
</script>