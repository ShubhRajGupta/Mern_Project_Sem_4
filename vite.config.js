import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Ensures assets resolve correctly on Netlify/Vercel
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
