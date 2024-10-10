import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ccclicker',
  plugins: [react()],
  server:{
    proxy: {
      '/api': {
        // target: 'http://127.0.0.1:8000',
        target: 'https://ccclickercounter.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
})
