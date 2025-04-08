import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import postcss from 'postcss'

// https://vite.dev/config/
export default defineConfig({
base: '/GamerOverlay/',
plugins: [
  react(),
  tailwindcss(),
  postcss(),
]
})
