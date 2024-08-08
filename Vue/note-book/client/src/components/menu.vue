<template>
    <div class="menu-wrap">
      <div class="back" @click="hideMenu">
        <van-icon name="arrow-left" size="26px"/>
      </div>
      <section class="header">
        <div class="avatar">
          <img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/956891d61e9d4ceb8fc548013a1e3ef5~tplv-73owjymdk6-jj-mark:0:0:0:0:q75.awebp?rk3s=f64ab15b&x-expires=1723688691&x-signature=WKh7uLKybHrxKeJwl3sXjitsSkY%3D" class="w-full h-auto">
        </div>
        <p class="user">Y</p>
      </section>
        </div>
        <p class="user">Y</p>
      </section>
  
      <div class="setting">
        <div class="set-item">
          <van-icon name="contact" size="0.4rem"/>
          <span>个人主页</span>
        </div>
        <div class="set-item">
          <van-icon name="bullhorn-o" size="0.4rem"/>
          <span>通知</span>
        </div>
        <div class="set-item"  @click="signOut">
          <van-icon name="revoke" size="0.4rem"/>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { showToast } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    isShowMenu:false
})
const emits = defineEmits(['update:isShowMenu'])
const hideMenu = ()=>{
    emits('update:isShowMenu', false)
}
// const emits = defineEmits(['hidden'])
  
// const hideMenu = () =>{
//     emits('hidden',false)
// }

const signOut = () =>{
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')
  showToast('退出成功！')
  router.push('/login')
}

  </script>
  
  <style lang="less" scoped>
  .menu-wrap{
    background-color: #e8e6e8;
    padding: 1.4rem 1rem;
    box-sizing: border-box;
    .back{
      position: absolute;
      top: 15px;
      left: 15px;
    }
    .header{
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 10px;
        img{
          width: 100%;
        }
      }
      .user{
        color: #101010;
        font-size: 0.37333rem;
      }
    }
    .setting{
      margin-top: 1rem;
      padding-left: 30%;
      .set-item{
        height: 1.2rem;
        line-height: 1.2rem;
        span{
          font-size: 0.4rem;
          color: #101010;
          margin-left: 10px;
        }
      }
    }
  }
  </style>