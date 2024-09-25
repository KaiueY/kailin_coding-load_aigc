<template>
    <div class="parents">
        <div class="parents_header">
            <div class="father">
                <father/>
            </div>
            <div class="mother">
                <mother/>
            </div>
        </div>
    </div>

</template>

<script setup>
import father from './father.vue';
import mother from './mother.vue';
</script>

<style lang="css" scoped>
.parents_header{
    display: flex;
    justify-content: space-between;
    .mother{
        padding: 40px;
    }
    .father{
        padding: 40px;
    }
}
</style>