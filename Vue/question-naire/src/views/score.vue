<template>
    <div class="score">
        <header class="your_score">
            <span class="score_num">{{score}}分</span>
            <div class="result_tip">提示语：萨德</div>
        </header>
    </div>
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue'
import pic from '@/assets/images/4-1.jpg'
import { useQuestionStore } from '@/store/question';
import { storeToRefs } from 'pinia';
import Item from './item.vue';

const _state = reactive({
    scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，旅梦欢迎你！",
    ],
})

const { state } = useQuestionStore()
const score = computed(() => {
    let sum = 100
    const ans =100/(state.answerList.length) 
    if(state.answerList.length===0)return 0
    for(let i=0;i<state.answerList.length;i++){
        if(!state.questionList[i].topic_answer[state.answerList[i]].is_standard_answer){
            sum -= ans
        }

    }
    return sum
})

// const _pic= import('@/assets/images/4-1.jpg')        

// onMounted(() => {
//     document.body.style.background = `url(${_pic}) `
// })

// const pic_ = `url(${import('../assets/images/4-1.jpg')})`
</script>

<style lang="less" scoped>
.score {
    font-size: 37px;

}
</style>

<style lang="css">
body {
    /* background:v-bind(pic_); */
    background: url(../assets/images/4-1.jpg);
}
</style>