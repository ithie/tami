import type { Meta, StoryObj } from '@storybook/vue3'
import TamiExpression from '@/components/TamiExpression/TamiExpression.vue'
import { MOODS } from '@/enums/MOODS'
import useMood from '@/composables/useMood/useMood'

const moodValues = {
  [MOODS.NEUTRAL]: {
    happiness: 5,
    hunger: 5,
    energy: 5
  },
  [MOODS.HUNGRY]: {
    happiness: 5,
    hunger: 7,
    energy: 5
  },
  [MOODS.VERY_HUNGRY]: {
    happiness: 5,
    hunger: 9,
    energy: 5
  },
  [MOODS.HAPPY]: {
    happiness: 7,
    hunger: 5,
    energy: 5
  },
  [MOODS.SUPER_HAPPY]: {
    happiness: 9,
    hunger: 5,
    energy: 5
  },
  [MOODS.TIRED]: {
    happiness: 5,
    hunger: 5,
    energy: 0
  }
}

const meta = {
  title: 'Components/TamiExpression',
  component: TamiExpression,
  render: (args) => ({
    setup() {
      console.log(args.state)
      if (!args.state || !moodValues[args.state]) {
        useMood({ happiness: 5, hunger: 5, energy: 5 })
      } else {
        useMood(moodValues[args.state])
      }
    },
    components: { TamiExpression },
    template: '<TamiExpression />'
  }),
  parameters: {},
  args: {},
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<{
  state?: MOODS
}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ExpressionNeutral: Story = {
  args: {
    state: MOODS.NEUTRAL
  }
}

export const ExpressionHungry: Story = {
  args: {
    state: MOODS.HUNGRY
  }
}

export const ExpressionVeryHungry: Story = {
  args: {
    state: MOODS.VERY_HUNGRY
  }
}

export const ExpressionHappy: Story = {
  args: {
    state: MOODS.HAPPY
  }
}

export const ExpressionSuperHappy: Story = {
  args: {
    state: MOODS.SUPER_HAPPY
  }
}

export const ExpressionTired: Story = {
  args: {
    state: MOODS.TIRED
  }
}
