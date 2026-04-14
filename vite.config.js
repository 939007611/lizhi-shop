import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 👇 仅加这一行！Netlify用根路径，彻底解决资源加载失败
  base: '/',
  server: {
    port: 5174
  }
})