import { defineStore } from "pinia";
import { ref } from "vue";
// 勾引 面试官 聊起 es6 moudle 问题
import type { HomeTopBarItem, RecentlyViewedItem } from '../types/home.ts'

export const useHomeStore = defineStore('home', () => {
  // 响应式状态 topBarState 包含 topBarState topBarstate.value
  // 泛型
  const topBarState = ref<HomeTopBarItem[]>([
    {
      "title": "游览",
      "icon": "photo-o"
    },
    {
      title: "景点门票",
      icon: "coupon-o",
    },
    {
      title: "酒店",
      icon: "hotel-o",
    },
    {
      title: "交通",
      icon: "logistics",
    },
    {
      title: "租车",
      icon: "guide-o",
    },

  ])
  const navBarstate = ref<HomeTopBarItem[]>([
    {
      title: "首页",
      icon: "home-o",
    },
    {
      title: "目的地",
      icon: "location-o",
    },
    {
      title: "我的",
      icon: "manager-o",
    },
    {
      title: "喜欢",
      icon: "like-o",
    },
    {
      title: "更多",
      icon: "more-o",
    },

  ])

  const recentlyViewedState = ref<RecentlyViewedItem[]>([
    {
      title: "曼谷 & 芭达雅景点通票",
      cover:
        "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
      price: 173,
    },
    {
      title: "曼谷 & 芭达雅景点通票",
      cover:
        "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
      price: 173,
    },
    {
      title: "曼谷 & 芭达雅景点通票",
      cover:
        "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
      price: 173,
    },
    {
      title: "曼谷 & 芭达雅景点通票",
      cover:
        "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
      price: 173,
    },
    {
      title: "曼谷 & 芭达雅景点通票",
      cover:
        "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
      price: 173,
    },
    {
      title: "曼谷 & 芭达雅景点通票",
      cover:
        "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
      price: 173,
    },

  ])
  return {
    topBarState,
    navBarstate,
    recentlyViewedState
  }
})