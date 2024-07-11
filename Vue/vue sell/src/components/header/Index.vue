<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img src="data:image/webp;base64,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" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>

                </div>
                <div class="description">
                    {{seller.description}}
                </div>
                <div class="support">
                    <!-- picture -->
                    <SupportIcon :type="0" size="1"/>
                    <span class="text">{{ seller.supports[1].description }}</span>
                </div>
            </div>
            <div class="support-count">
                <span class="count">{{ seller.supports.length }}个</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="bulletion-wrapper">
            <span class="bulletion-title"></span>
            <span class="bulletion-text">{{ seller.bulletin }}   </span>
            <i class="iconfont icon-youjiantou"></i>

        </div>

        <div class="bg"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SupportIcon from '../support-icon/Index.vue'

const bg = 'url(data:image/webp;base64,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)'
defineProps({
  seller: {
    type: Object,
    required: true
  }
});
</script>

<style lang="less" scoped>

@import '../../assets/varible.less';
@import '../../assets/mixin.less';
.header{
  color: @color-white;
  position: relative;
  background-color: @color-background-ss;

  .content-wrapper{
    display: flex;
    padding: 24px 12px 18px 24px;
    position: relative;

    .avatar{
      width: 64px;
      height: 64px;
      border-radius: 2px;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .content{
      flex: 1;
      margin-left: 16px;
      .title{
        margin-bottom: 8px;
        display: flex;
        .brand{
          width: 30px;
          height: 18px;
          display: inline-block;
          // background-image: url(./brand@2x.png);
          .bg-image('brand');
          background-size: 100% 100%;
        }
        .name{
          font-size: @fontsize-large;
          margin-left: 6px;
          font-weight: bold;
        }
      }
      .description{
        font-size: @fontsize-small;
        margin-bottom: 8px;
      }
      .support{
        display: flex;
        align-items: center;
        .text{
          font-size: @fontsize-small-s;
          margin-left: 4px;
        }
      }
    }
    .support-count{
      position: absolute;
      right: 12px;
      bottom: 14px;
      height: 24px;
      line-height: 24px;
      background-color: @color-background-sss;
      border-radius: 14px;
      padding: 0 8px;
      display: flex;
      align-items: center;
      .count{
        font-size: @fontsize-small-s;
      }
      .iconfont{
        font-size: @fontsize-small-s;
        margin-left: 2px;
      }
    }
  }
  .bulletion-wrapper{
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 8px;
    background-color: @color-background-sss;
    .bulletion-title{
      flex: 0 0 22px;
      height: 12px;
      .bg-image('bulletin');
      background-size: 100% 100%;
    }
    .bulletion-text{
      flex: 1;
      margin-left: 4px;
      font-size: @fontsize-small-s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .icon-youjiantou1{
      flex: 0 0 10px;
      font-size: 8px;
    }
  }
  .bg{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: v-bind(bg);
    background-size: 100% 100%;
    z-index: -1;
    filter: blur(10px);
  }
}

</style>