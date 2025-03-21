import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: [
      ...[
        '**/__mockData__/**',
        '**/__stories__/**',
        '**/node_modules/**',
        '**/dist/**',
        '**/integration-tests/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'
      ]
    ],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: [
        '**/__mockData__/**',
        '**/node_modules/**',
        '**/stories/**',
        '**/interfaces/**',
        '**/integration-tests/**',
        'src/tests/**',
        'src/types/**',
        'src/index.ts',
        '**/*.stories.ts',
        '**/*.spec.ts',
        '**/*.e2e.ts',
        '**/*.a11y.ts'
      ]
    }
  }
})
