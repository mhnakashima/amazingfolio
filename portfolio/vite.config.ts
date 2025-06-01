import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    federation({
      name: 'portfolio',
      filename: 'remoteEntry.js',
      exposes: {
        './Portfolio': './src/components/Portfolio.vue',
      },
      shared: ['vue']
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 3002,
  },
})
