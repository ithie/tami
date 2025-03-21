import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  core: {
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
}
export default config
