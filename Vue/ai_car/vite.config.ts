import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import {VantResolver} from '@vant/auto-import-resolver'
// npm i unplugin-vue-components @vant/auto-import-resolver @types/node --save-dev

// 短链接
// path.resolve 绝对物理路径  node环境
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers:[VantResolver()]
    })
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src")

    }
  }
})
