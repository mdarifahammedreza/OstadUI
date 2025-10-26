import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: 'ostadui-1.onrender.com',  // Allow the server to listen on all interfaces
    port: 5173,       // Ensure it uses port 5173
  },
})
