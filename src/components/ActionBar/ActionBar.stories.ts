import type { Meta, StoryObj } from '@storybook/vue3'
import ActionBar from './ActionBar.vue'

const meta = {
  title: 'Components/ActionBar',
  component: ActionBar,
  render: () => ({
    components: { ActionBar },
    template: '<ActionBar />'
  }),
  parameters: {},
  args: {},
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
