<template>
    <div class="item-wrapper flex space-x-2 w-screen overflow-scroll px-4">
        <div 
            class="item flex-[0_0_auto] w-28 space-y-2"
            v-for="(item,index)  in items"
            :key="item.title"
            >
            <div class="item-image">
                <img :src="item.cover" alt="item.name" class="rounded-lg">

            </div>
            <div class="item-info">
                <div class="item-name text-xs font-bold ">{{ item.title }}</div>
                <div class="item-price text-xs font-bold ">{{ getCurrency(item.price) }}</div>

            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>

import type { RecentlyViewedItem } from '@/types/home';
import { getCurrency} from '@/utils/utils.ts'

interface Props {
    items:RecentlyViewedItem []
}

// 任然是核心数据
//  defineProps<{
//     items: RecentlyViewedItem[]
//  }>()
defineProps<Props>()
</script>