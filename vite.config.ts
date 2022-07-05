import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path =require('path')
// https://vitejs.dev/config/
// 配置@路径别名
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
