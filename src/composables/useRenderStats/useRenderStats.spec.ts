import { describe, expect, test } from 'vitest'
import useRenderStats from './useRenderStats'
import { type Ref } from 'vue'
import getInitialValues from '../utils/getInitialValues'

const assertions: { hunger: Ref<number>; happieness: Ref<number>; energy: Ref<number> }[] = [
  getInitialValues([0, 5, 5]),
  getInitialValues([10, 15, 15]),
  getInitialValues([-10, 3, 3])
]

describe('composables/useRenderStats', () => {
  assertions.forEach((given, index) =>
    test(`should render stats: ${index}`, () => {
      const { renderedEnergy, renderedHappieness, renderedHunger } = useRenderStats(given)
      expect(renderedEnergy.value).toMatchSnapshot()
      expect(renderedHappieness.value).toMatchSnapshot()
      expect(renderedHunger.value).toMatchSnapshot()
    })
  )
})
