<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length">
            <i>Please add some products to cart.</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.id">
            {{ product.title }} - {{ product.title }} x {{product.quantity}}
            </li>
        </ul>
        <p>
            Total:{{ total }}
        </p>
        
    </div>
    </template>
    <script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    const store = useStore()
    const products = computed(() => store.getters['cart/cartProducts'])
    const total = computed(()=>store.getters['cart/cartTotalPrice'])
    </script>