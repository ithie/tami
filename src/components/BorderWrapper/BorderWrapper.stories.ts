import type { Meta, StoryObj } from '@storybook/vue3'
import BorderWrapper from '@/components/BorderWrapper/BorderWrapper.vue'

const meta = {
  title: 'Components/BorderWrapper',
  component: BorderWrapper,
  render: () => ({
    components: { BorderWrapper },
    template: '<BorderWrapper />'
  }),
  parameters: {},
  args: {},
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
