import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    createVuePlugin(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    include: ['core-js']
  },
  server: {
    port: 3000
  },
  // Opcional: se quiser injetar SCSS globalmente.
  /*
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/paper/variables.scss";`
      }
    }
  }
  */
});