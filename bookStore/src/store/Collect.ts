import { defineStore } from "pinia";
import type { recentItem, favoriteItem } from '../types/collect.ts'
import { ref } from "vue";

export const useCllectStore = defineStore('collect', () => {
    const recentState = ref<recentItem[]>([
        {
            id: 1,
            title: '百年孤独',
            author:'史铁生',
            cover: "https://cdn.weread.qq.com/weread/cover/49/yuewen_935536/t6_yuewen_9355361682243599.jpg",

        },
        {
            id: 2,
            title: '破圈',
            author: '张三',
            cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/625/41354625/t6_41354625.jpg'
        },
        {
            id: 3,
            title: '活着',
            author: '余华',
            cover: 'https://wfqqreader-1252317822.image.myqcloud.com/cover/464/834464/t6_834464.jpg'
        },

    ])

    const favoriteState = ref<favoriteItem[]>([
        {
            id: 1,
            title: '今天也想抱抱你',
            author: '找茶',
            cover: 'https://cdn.weread.qq.com/weread/cover/29/cpplatform_5slxflhipibhv7jjmt6nbl/t6_cpplatform_5slxflhipibhv7jjmt6nbl1722423798.jpg'
        },
        {
            id:2,
            title:'阿春氏谋夫案',
            author:'王冷佛',
            cover:'https://cdn.weread.qq.com/weread/cover/32/cpplatform_nefhitf7lxfhfxppyvengm/t6_cpplatform_nefhitf7lxfhfxppyvengm1722410692.jpg'
        }

    ])
    return{
        recentState,
        favoriteState
    }
}) 