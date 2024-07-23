import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'

export const useQuestionStore = defineStore('question', () => {
    const state = reactive({
        questionList: [],
        itemNum: 1,//第几题
        answerList: [],//选中的答案
    })

    const getQuestionList = () => {
        axios.get('https://mock.mengxuegu.com/mock/65a7d72cb674c730aaefdcea/example/question')
            .then(res => {
                state.questionList = res.data.questions;
                console.log(state.questionList);
            })
    }
    const setItemNum = () => {
        state.itemNum++;
    }
    const saveAnswer = (index) => {
        state.answerList.push(index);
    }

    return {
        state,
        getQuestionList,
        setItemNum,
        saveAnswer

    }


})