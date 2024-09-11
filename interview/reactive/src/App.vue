<template>
  <div>
    <h2>{{ state.msg }}</h2>
    <hr>
    <h2>{{ state.data.name }}</h2>
    <button @click="changeName"> click</button>
  </div>
</template>

<script>
// import { shallowReactive,reactive, computed,effect   } from 'vue';

import { reactive } from './reactivity/reactive.js'
import { effect } from './reactivity/effect.js';
import { ref } from './reactivity/ref.js';

export default {
  setup() {
    const state = reactive({
      msg: 'Hello world q',
      data: {
        name: 'kailin'
      }
    })
    const num = ref(1)

    const changeName = () => {
      state.data.name = 'hukailin'
      // state.msg = 'Hello world'
    }
    effect(() => {
      console.log(`${state.data.name[0]}---${state.msg}`)
    })

    return {
      state,
      changeName,
      // firstName

    }
  }
}

</script>

<style scoped></style>