<template>
  <div ref="listRef" class="infinte-list-container" @scroll="scrollHandle">
    <div
      class="empty"
      :style="{ height: itemSize * listData.length + 'px' }"
    ></div>

    <div class="infinte-list" :style="{ transform: getTransform }">
      <div
        class="infinte-list-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, computed, reactive, onMounted} from "vue";


const props = defineProps({
  listData: {
    type: Array,
    default: () => [],
  },
  itemSize: {
    type: Number,
    default: 50,
  },
});

const state = reactive({
  scrollHeight: 0,
  start: 0,
  end: 0,
  listOffset: 0,
});

// 计算可视区域能展示几条
const visibleCount = computed(() => {
  return Math.ceil(state.scrollHeight / props.itemSize);
});

// 可视区域要展示的数据
const visibleData = computed(() => {
  return props.listData.slice(
    state.start,
    Math.min(state.end, props.listData.length)
  );
});

// 列表被带出去后移回
const getTransform = computed(() => {
  return `translateY(${state.listOffset}px)`;
});

const listRef = ref(null)
onMounted(() => {
  console.log('--------',listRef.value);
  
  state.scrollHeight = listRef.value.clientHeight;
  state.end = state.start + visibleCount.value;
});

const scrollHandle = () => {
  let scrollTop = listRef.value.scrollTop;
  state.start = Math.floor(scrollTop / props.itemSize);
  state.end = state.start + visibleCount.value;
  state.listOffset = scrollTop - (scrollTop % props.itemSize);
  // console.log(scrollTop);
};
</script>
  
  <style lang="css" scoped>
.infinte-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
}
.infinte-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.infinte-list-item {
  text-align: center;
  border-bottom: 1px solid #f3e9e9;
  box-sizing: border-box;
}
</style>