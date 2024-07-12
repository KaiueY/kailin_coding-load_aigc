<template>
    <Transition name="fade">
        <div class="header-detail">
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">商店名字</h1>
                    <div class="star-wtapper">
                        🌟🌟🌟🌟🌟
                    </div>
                    <div class="title">
                        <span>优惠信息</span>
                        <!-- 信息 -->
                    </div>
                    <div class="title">
                        <span>商家公告</span>
                    </div>
                </div>
            </div>
            <div class="detail-close">
                <i @click.stop="close" class="iconfont icon-guanbi"></i>
            </div>
        </div>

    </Transition>

</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(['hide']);// 定义一个事件，当点击关闭时，触发这个事件

const close = () => {
    emits('hide', false) // 触发事件
}
</script>

<style lang="less" scoped>
@import "../../assets/varible.less";

.header-detail {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: @color-background-s;
    color: @color-white;
    z-index: 100;
    backdrop-filter: blur(5px);
    &.fade-enter-from,
    &.fade-leave-to {
        opacity: 0;
        background: @color-background;
    }
    &.fade-enter-active,
    &.fade-leave-active{
        transition: all 0.5 ease;// 过渡时间  任何属性 all
    }
    .detail-wrapper{
        width: 100%;
        min-height: 100%;
        overflow: auto;
        .detail-main{
            margin-top: 64px;
            padding-bottom: 64px;
            .name{
                font-size: @fontsize-large;
                text-align: center;
                font-weight: bold;
            }
            .star-wtapper{
                padding: 2px 0;
                margin-top: 8px;
                text-align: center;
            }
            .title{
                width: 80%;
                margin: 28px auto 24px auto;
                text-align: center;
                display: flex;

                &::before,
                &::after{
                    content: '';
                    flex: 1;
                    border-bottom: 1px solid @color-white;
                    margin: auto 21px;
                    opacity: 0.5;
                }
                span{
                    font-size: @fontsize-medium;
                    font-weight: bold;
                    padding: 0 12px;
                }

            }
        }
    }

    .detail-close {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);

        .icon-font {
            font-size: @fontsize-large-xxxx;
        }
    }
}
</style>