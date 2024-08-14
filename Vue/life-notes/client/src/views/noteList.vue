<template>
    <div class="note-list">
        <ul>
            <li v-for="note in notes " :key="note.id" @click="goNoteDetail(note.id)">
                <div class="img">
                    <img :src="note.head_img">

                </div>
                <div class="time">{{note.c_time}}</div>
                <div class="title">{{note.title}}</div>
            </li>
            
        </ul>
    </div>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router';
import axios from '@/api/index';
import { onMounted , ref } from 'vue';

let notes = ref([])
const route = useRoute()
const router = useRouter()
const findNoteListByType = async () => {
    const res = await axios.get('/findNoteListByType', {
        params: {
            noteType: route.query.title,
        }
    })
    notes.value = res.data
    // console.log(res);
}

const goNoteDetail = (id) =>{
    router.push({path:'/noteDetail',query:{id:id}})
}

onMounted(() => {
    findNoteListByType();
});
// console.log(route.query.title);
</script>

<style lang="less" scoped>
.note-list {
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
        row-gap: 1rem;

        li {
            font-size: 0.37rem;

            .img {
                width: 100%;
                height: 4rem;
                

                img {
                    border-radius: 0.27rem;
                    width: 100%;
                    height: 100%;
                }
            }

            .title {
                margin-top: 5px;
            }
        }
    }
}
</style>