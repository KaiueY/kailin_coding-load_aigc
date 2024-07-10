<template>
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" 
            v-for="num in 5" 
            :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span v-for="num in 5" 
                :key="num" @click="onRate(num)" 
                @mouseover="mouseOver(num)">★</span>
        </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed, defineEmits,ref } from 'vue'
// 组件自身的状态
let fontwidth = computed(() => `width:${width.value}em;`)
let props = defineProps({
    value: Number,
    theme: { type: String, default: 'orange' }
})
let width = ref(props.value)
let themeObj = {
    orange: '#fa541c',
    blue: '#40a9ff',
    green: '#73d13d',
    black: '#000',
    red: '#f5222d',
    yellow: '#ffaa00'
}
const fontStyle = computed(() => {
    return `color:${themeObj[props.theme]}`
})
let emits = defineEmits(["update-rate"])
const onRate = (num) => {
    emits("update-rate", num)
}
function mouseOver(i){  // 鼠标移到上面时动态改变星星数量
    width.value = i;
}
function mouseOut(){    // 鼠标移开时将星星保持先前的数量
    width.value = props.value
}

</script>
<style lang="css" scoped>
.rate{
    position: relative;
    display: inline-block;
}
.rate span {
    /* letter-spacing: 3px; */
    width:1em;
    display: inline-block;
}
.rate > span.hollow{
    position: absolute;
    display: inline-block;
    top:0;
    left:0;
    width: 0;
    height: 22px;
    overflow: hidden;   
    /* 超出隐藏 */
}
</style>
