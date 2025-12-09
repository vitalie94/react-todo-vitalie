import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-todo-vitalie/',  // ← CHEIA: numele repo-ului + slash la final
})