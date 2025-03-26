import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import vue3 from '@vitejs/plugin-vue'
import { version } from './package.json'
import vitePluginReplace from './src/vite-plugin-replace/vite-plugin-replace'
import { resolve } from 'path'

const pathSrc = resolve(__dirname, 'src')

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  plugins: [vitePluginReplace({ __VERSION__: version }), vue3(), visualizer({ open: true })],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.VITE_NODE_ENV)
  },
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: 'tami-core.js'
      }
    },
    lib: {
      entry: './main.ce.ts',
      name: 'tamiCore',
      fileName: 'tami-core',
      formats: ['iife']
    },
    emptyOutDir: true
  }
})
