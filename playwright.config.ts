import { defineConfig, devices } from '@playwright/test'

const testMatch = '**/*.e2e.ts'

export default defineConfig({
  testDir: './e2e-tests',
  testMatch,
  fullyParallel: true,
  workers: 1,
  reporter: [['junit', { outputFile: 'test-results/results.xml' }], ['list']],
  timeout: 40_000,
  use: {
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    bypassCSP: true,
    acceptDownloads: true
  },
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    }
  ]
})
