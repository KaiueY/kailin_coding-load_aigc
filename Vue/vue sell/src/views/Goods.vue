<template>
    <div class="goods">
        <div class="goods-content">
            <div class="menu-wrap" ref="menuWrap">
                <ul>
                    <li class="menu-item " @click="selectMenu(index)" :class="{'current':state.currentIndex===index}" v-for="(item,index) in state.goods" key="index">
                        <span class="text">
                            <SupportIcon size="3" v-if="item.type > 0" />
                            {{ item.name }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import SupportIcon from '@/components/support-icon/Index.vue'
import { getGoods } from "@/api/index.js"
import { onMounted, onUpdated, reactive, ref,nextTick } from 'vue';
import BScroll from '@better-scroll/core';

const state = reactive({
    goods: [],
    currentIndex: 0,
})
getGoods().then(res => {
    state.goods = res
    console.log(state.goods);
    nextTick(()=>{  //只会在组件挂载且完成渲染执行
        initScroll()
    })
})

const selectMenu = (index) => {
    state.currentIndex = index
}
//滚动效果
const menuWrap = ref(null)
const initScroll = ()=>{
let bs = new BScroll(menuWrap.value, {
    click: true,
  
})
}
//当页面更新时，初始化滚动 但是不适合这里
// onUpdated(()=>{
//     initScroll()
// })



</script>

<style lang="less" scoped>
@import '../assets/varible.less';



.goods {
    width: 100%;
    position: absolute;
    bottom: 46px;
    top: 177px;
    overflow: hidden;

    .goods-content {
        display: flex;
        height: 100%;

        .menu-wrap {

            flex: 0 0 80px;
            background-color: @color-background-ssss;
            // overflow-y: scroll;

            .menu-item {
                padding: 0 8px;
                font-size: @fontsize-small;
                height: 64px;
                align-items: center;
                .text{
                    display: flex;
                    align-items: center;
                    height: 100%;
                
                }

                &.current {
                    background-color: #fff;
                    font-weight: bold;
                }

            }
        }
    }
}
</style>