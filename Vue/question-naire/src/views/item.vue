<template>
    <itemContainer parent ='item'/>
</template>

<script setup>
import itemContainer from '../components/itemContainer.vue'
import { useQuestionStore  } from '@/store/question.js'

const questionStore = useQuestionStore()

questionStore.getQuestionList()

</script>

<style lang="css" scoped>

</style>