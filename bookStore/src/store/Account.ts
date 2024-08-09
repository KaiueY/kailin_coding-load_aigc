import { defineStore } from "pinia";
import { accountItem } from "../types/account";
import { ref } from "vue";


export const  useAccountSotre = defineStore('account',()=>{
    const accountState = ref<accountItem[]>([
        {
            id:1,
            icon:'star-o',
            title:'我的收藏',
            url:''
        
        },
        {
            id:2,
            icon:'records',
            title:'阅读记录',
            url:''
        
        },
        {
            id:3,
            icon:'setting-o',
            title:'账户设置',
            url:''
        
        },
        {
            id:4,
            icon:'smile',
            title:'意见反馈',
            url:''
        
        },
        {
            id:5,
            icon:'star-o',
            title:'我的收藏',
            url:''
        
        },
        {
            id:6,
            icon:'question-o',
            title:'有疑问',
            url:''
        
        },
        {
            id:7,
            icon:'shop-o',
            title:'买书籍',
            url:''
        
        },
    ])
    return {
        accountState
    }
})