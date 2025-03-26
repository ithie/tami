import { describe, test, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import TamiExpression from '@/components/TamiExpression/TamiExpression.vue'
import useMood from '@/composables/useMood/useMood'
import getInitialValues from '@/composables/utils/getInitialValues'
import { MOODS } from '@/enums/MOODS'
import type IMood from '@/interfaces/IMood'

const assertions: Array<[MOODS, IMood]> = [
  [MOODS.TIRED, getInitialValues<IMood>([0, 5, 5], true)],
  [MOODS.VERY_HUNGRY, getInitialValues<IMood>([5, 9, 5], true)],
  [MOODS.TIRED, getInitialValues<IMood>([5, 5, 3], true)],
  [MOODS.HUNGRY, getInitialValues<IMood>([5, 5, 7], true)],
  [MOODS.SUPER_HAPPY, getInitialValues<IMood>([5, 9, 5], true)],
  [MOODS.HAPPY, getInitialValues<IMood>([5, 7, 5], true)],
  [MOODS.HAPPY, getInitialValues<IMood>([5, 5, 5], true)]
]

describe('components/TamiExpression', () => {
  assertions.forEach(([assertion, given]) => {
    test(`should render mood: ${assertion}`, async () => {
      const wrapper = mount(TamiExpression)

      useMood(given)
      await flushPromises()
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
