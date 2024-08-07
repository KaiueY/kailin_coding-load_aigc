<template>
  <div class="flex items-start items-center py-2 text-sm max-w-80">
    <div class="rounded-lg bg-blue-500 px-4 py-2 ml-4 text-white relative">
      <div class="avatar absolute top-1 -left-7">
        <van-icon
          class="iconfont"
          size="1.5rem"
          class-prefix="icon"
          name="chatgpt"
          color="#000"
        />
      </div>
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