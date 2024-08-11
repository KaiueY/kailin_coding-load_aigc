<template>
  <div class="flex items-start items-center py-2 text-sm max-w-80">
    <div class="rounded-lg bg-blue-500 px-4 py-2  text-white relative">
      <p v-html="handleMsg"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  msg: string;
}
const props = defineProps<Props>();
const handleMsg = computed(() => {
  let msg: any = props.msg;
  // console.log(msg);
  msg = msg.replaceAll("\n", "<br/>");
  msg = msg.replaceAll(" ", "&nbsp;");
  msg = msg.replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
  msg = msg.replaceAll(" - ", "<br/>");
  // console.log(msg);
  return msg;
});
</script>

<style lang="less" scoped>
</style>