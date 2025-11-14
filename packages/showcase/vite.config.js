import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
// Tailwind CSS v4 works automatically with Vite - no extra config needed!
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      // In development: use local library source
      // In production: use npm package (no alias needed)
      ...(process.env.NODE_ENV === 'development' && {
        '@dipendrabhandari/react-ui-library': path.resolve(__dirname, '../ui-library/src')
      })
    }
  },
  base: './', // Important for deployment
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
});