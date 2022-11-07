/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [vue()],
  server: {
    proxy: {
      //Proxy for API endpoints
      '/api': {
        target: 'http://127.0.0.1:85',
        changeOrigin: true,

        }
      }
  }
})
