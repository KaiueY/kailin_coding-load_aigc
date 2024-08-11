<template>
  <div class="flex py-2 text-sm">
    <div
      class="relative rounded-lg bg-violet-200 border border-gray-300 px-4 py-2 ml-auto mr-4 text-gray-700 max-w-72"
    >
      <div class="avatar absolute top-2 -right-7">
        <van-icon name="user-circle-o" size="1.5rem" />
      </div>
      <p>{{ props.msg }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  msg: string;
}
const props = defineProps<Props>();
</script>

<style lang="less" scoped>
</style>