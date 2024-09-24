import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,  // 设置开发服务器监听的端口为8080
    hmr: {  // 热模块替换（Hot Module Replacement）配置
      host: 'localhost',  // HMR服务的主机地址
      port: 8080  // HMR服务的端口
    },
    proxy: {  // 代理设置
      '/api': {  // 当请求以'/api'开头时
        target: 'http://localhost:3000/',  // 将这些请求代理到目标服务器 http://localhost:3000
        changeOrigin: true,  // 改变请求头中的host为目标服务器的host
        rewrite: path => path.replace(/^\/api/, '')  // 重写路径，移除前缀'/api'
      }
    }
  }
})
