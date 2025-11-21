import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'R3F-Texture-Config-Start',
  plugins: [react()],
  server: {
    host: true
  },
})
