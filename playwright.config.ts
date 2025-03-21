import { defineConfig, devices } from '@playwright/test'

const testMatch = process.env.TEST_MATCH_A11Y || '**/*.e2e.ts'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e-tests',
  testMatch,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 3 : 2,

  /* Opt out of parallel tests on CI. */
  workers: 1,

  reporter: [['junit', { outputFile: 'test-results/results.xml' }], ['list']],

  timeout: 60_000,
  use: {
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    bypassCSP: true,
    acceptDownloads: true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    }
  ]
})
