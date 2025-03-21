import type { Meta, StoryObj } from '@storybook/vue3'
import TamiCore from './TamiCore.ce.vue'
import useMood from './composables/useMood/useMood'

const meta = {
  title: 'TamiCore',
  component: TamiCore,
  render: () => ({
    setup() {
      useMood({ hunger: 5, happieness: 5, energy: 5, age: 1 })
    },
    components: { TamiCore },
    template: '<TamiCore />'
  }),
  parameters: {},
  args: {},
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
