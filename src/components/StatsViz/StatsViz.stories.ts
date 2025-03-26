import type { Meta, StoryObj } from '@storybook/vue3'
import StatsViz from '@/components/StatsViz/StatsViz.vue'

const meta = {
  title: 'Components/StatsViz',
  component: StatsViz,
  render: () => ({
    components: { StatsViz },
    template: '<StatsViz />'
  }),
  parameters: {},
  args: {},
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
