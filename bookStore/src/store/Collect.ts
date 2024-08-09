import { defineStore } from "pinia";
import type { collectItem, favoriteItem } from '../types/collect.ts'
import { ref } from "vue";

export const useCllectStore = defineStore('collect', () => {
    const collectState = ref<collectItem[]>([
        {
            id: 1,
            title: '百年孤独',
            author:"https://cdn.weread.qq.com/weread/cover/49/yuewen_935536/t6_yuewen_9355361682243599.jpg",

            cover: ''
        },
        {
            id: 2,
            title: '',
            author: '',
            cover: ''
        },
        {
            id: 3,
            title: '',
            author: '',
            cover: ''
        },

    ])

    const favoriteState = ref<favoriteItem[]>([
        {
            id: 2,
            title: '',
            author: '',
            cover: ''
        }
    ])
    return{
        collectState,
        favoriteState
    }
}) 