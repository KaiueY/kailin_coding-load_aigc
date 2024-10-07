<template>
    <div>
        this is father
    </div>
    <child>
        <template #default="{ item }">
            <span :style="{ color: item.color }">{{ item.name }}</span>
        </template>
    </child>
</template>

<script setup>
import child from './child.vue';
</script>

<style lang="css" scoped></style>