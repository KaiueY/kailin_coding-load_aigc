import { defineStore } from "pinia";
import type {bookItem,CommendItem, HomeNavBarItem} from '../types/home'
import { ref } from "vue";

export const useHomeStore = defineStore('home',()=>{
    const topBarState = ref<HomeNavBarItem[]>([
        {
            id:1,
            title:'榜单',
            icon :'arrow'
        },
        {
            id:2,
            title:'历史',
            icon :'arrow'
        },
        {
            id:3,
            title:'文学',
            icon :'arrow'
        },
        {
            id:4,
            title:'悬疑',
            icon :'arrow'
        },
        {
            id:5,
            title:'诗词',
            icon :'arrow'
        },
        {
            id:6,
            title:'儿童',
            icon :'arrow'
        },

    ])
    const booksListState = ref<bookItem[]>([
        {
            id:1,
            image:"https://cdn.weread.qq.com/weread/cover/49/yuewen_935536/t6_yuewen_9355361682243599.jpg",
            title:'百年孤独'
        },
        {
            id:2,
            image:"https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg",
            title:'解密'
        },
        {
            id:3,
            image:"https://cdn.weread.qq.com/weread/cover/85/yuewen_32514589/t6_yuewen_325145891721196557.jpg",
            title :'唐朝诡事录'
        },
        {
            id:4,
            image:"https://cdn.weread.qq.com/weread/cover/80/yuewen_695233/t6_yuewen_6952331677562148.jpg",
            title :'三体（全集）'
        },
        {
            id:5,
            image:"https://cdn.weread.qq.com/weread/cover/72/cpplatform_i8gtf9q8sz1ae3iw84x31v/t6_cpplatform_i8gtf9q8sz1ae3iw84x31v1722332234.jpg",
            title:'看见即治愈'
        },
        {
            id:6,
            image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/625/41354625/t6_41354625.jpg",
            title:'破圈'
        }

    ])

    const bookCommendState = ref<CommendItem[]>([
        {
            id:1,
            image:"https://cdn.weread.qq.com/weread/cover/49/yuewen_935536/t6_yuewen_9355361682243599.jpg",
            title:'百年孤独',
            decoration:"大家都在读"
        },
        {
            id:2,
            image:"https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg",
            title:'解密',
            decoration:"大家都在读"
        },
        {
            id:3,
            image:"https://cdn.weread.qq.com/weread/cover/85/yuewen_32514589/t6_yuewen_325145891721196557.jpg",
            title :'唐朝诡事录',
            decoration:"大家都在读"
        },
        {
            id:4,
            image:"https://cdn.weread.qq.com/weread/cover/80/yuewen_695233/t6_yuewen_6952331677562148.jpg",
            title :'三体（全集）',
            decoration:"大家都在读"
        },
        {
            id:5,
            image:"https://cdn.weread.qq.com/weread/cover/72/cpplatform_i8gtf9q8sz1ae3iw84x31v/t6_cpplatform_i8gtf9q8sz1ae3iw84x31v1722332234.jpg",
            title:'看见即治愈',
            decoration:"大家都在读"
        },
        {
            id:6,
            image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/625/41354625/t6_41354625.jpg",
            title:'破圈',
            decoration:"大家都在读"
        },
        {
            id:7,
            image:"https://cdn.weread.qq.com/weread/cover/86/YueWen_33628204/t6_YueWen_33628204.jpg",
            title:'认知觉醒',
            decoration:"大家都在读"
        },
        {
            id:8,
            image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/44/674044/t6_674044.jpg",
            title:'我与地坛',
            decoration:"大家都在读"
        },
        {
            id:9,
            image:"https://cdn.weread.qq.com/weread/cover/95/YueWen_40133507/t6_YueWen_40133507.jpg",
            title:'基层女性',
            decoration:"大家都在读"
        },
        {
            id:10,
            image:"https://cdn.weread.qq.com/weread/cover/75/cpPlatform_dbb14284a55f1e733b60202b0777255d/t6_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg",
            title:'长安的荔枝',
            decoration:"大家都在读"
        },
        {
            id:11,
            image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/464/834464/t6_834464.jpg",
            title:'活着',
            decoration:"大家都在读"
        },

        {
            id:12,
            image:"https://cdn.weread.qq.com/weread/cover/94/cpplatform_rsxacan8yacz4rjbohawxe/t6_cpplatform_rsxacan8yacz4rjbohawxe1673856594.jpg",
            title:'暮色将尽',
            decoration:"大家都在读"
        },
        {
            id:13,
            image:"https://cdn.weread.qq.com/weread/cover/49/yuewen_935536/t6_yuewen_9355361682243599.jpg",
            title:'百年孤独',
            decoration:"大家都在读"
        },
        {
            id:14,
            image:"https://cdn.weread.qq.com/weread/cover/32/yuewen_827184/t6_yuewen_8271841721702514.jpg",
            title:'解密',
            decoration:"大家都在读"
        },
        {
            id:15,
            image:"https://cdn.weread.qq.com/weread/cover/85/yuewen_32514589/t6_yuewen_325145891721196557.jpg",
            title :'唐朝诡事录',
            decoration:"大家都在读"
        },
        {
            id:16,
            image:"https://cdn.weread.qq.com/weread/cover/80/yuewen_695233/t6_yuewen_6952331677562148.jpg",
            title :'三体（全集）',
            decoration:"大家都在读"
        },
        {
            id:17,
            image:"https://cdn.weread.qq.com/weread/cover/72/cpplatform_i8gtf9q8sz1ae3iw84x31v/t6_cpplatform_i8gtf9q8sz1ae3iw84x31v1722332234.jpg",
            title:'看见即治愈',
            decoration:"大家都在读"
        },
        {
            id:18,
            image:"https://wfqqreader-1252317822.image.myqcloud.com/cover/625/41354625/t6_41354625.jpg",
            title:'破圈',
            decoration:"大家都在读"
        },
    ])

    return {
        topBarState,
        booksListState,
        bookCommendState
    }
})