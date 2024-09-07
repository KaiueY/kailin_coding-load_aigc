import { defineStore } from "pinia";
import type { Article } from "../types/article";
import { ref } from "vue";



export const useArticleStore = defineStore('article', () => {
    const _articles: Article[] = [
        {
            id: 1,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 2,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 3,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 4,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 5,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 6,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 7,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 8,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 9,
            title: '预祝kailin拿下字节跳动'
        }, {
            id: 10,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 11,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 12,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 13,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 14,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 15,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 15,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 16,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 17,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 18,
            title: '预祝kailin拿下字节跳动'
        },
        {
            id: 19,
            title: '预祝kailin拿下字节跳动'
        },


    ]
    const articles = ref<Article[]>([])
    // 滚动加载更多
    const getArticles = (page: number, size: number = 10) => {
        return new  Promise((resolve)=>{
            setTimeout(() =>{
                // 某页的数据
                const data = _articles.slice((page-1)*size,page*size)
                articles.value = [...articles.value,...data]
                resolve({
                    data,
                    page,
                    total:_articles.length,
                    hasMore: page *size < _articles.length
                })
            },500)
            
        })
    }
    return {
        articles,
        getArticles
    }
})