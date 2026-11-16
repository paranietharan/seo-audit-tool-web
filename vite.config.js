import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: loadEnv(mode, process.cwd(), '').API_GATEWAY_URL || 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
}))
