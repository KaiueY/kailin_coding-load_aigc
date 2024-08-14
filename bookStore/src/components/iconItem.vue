<template>
    <van-cell
      :title="title"
      :icon="icon"
      is-link
      @click="onClick"
    />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'IconItem',
    props: {
      title: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    methods: {
      onClick() {
        this.$emit('navigate', this.url);
      }
    }
  });
  </script>
 