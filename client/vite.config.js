import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"./some-coder-whowantstocode/Portfolio",
  plugins: [react()],
  
})
