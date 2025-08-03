import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3010,
    open: true,
    // Force reload on file changes
    hmr: {
      overlay: true
    },
    // Watch for Sass file changes
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Sass configuration options can be added here
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}); 