import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// 小插件 组件 name 显示 
const path =require('path')
// https://vitejs.dev/config/
// 配置@路径别名
export default defineConfig({
  plugins: [vue({
    reactivityTransform:true
  }),vueSetupExtend()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variable.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
