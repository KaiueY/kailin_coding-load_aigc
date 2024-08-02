import { defineStore } from "pinia";
import { ref } from "vue";
import type {DiscountInfo} from '@/types/discount'

export const useDiscountStore = defineStore('discount',()=>{
    const discountInfo = ref<DiscountInfo[]>([
        {
            id:1,
            title:'2'
        }
    ])
    return {

        discountInfo
    }
})