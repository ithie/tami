import { describe, expect, test } from 'vitest'
import useRenderStats from '@/composables/useRenderStats/useRenderStats'
import type IRefMood from '@/interfaces/IRefMood'
import getInitialValues from '../utils/getInitialValues'

const assertions: IRefMood[] = [
  getInitialValues([0, 5, 5]),
  getInitialValues([10, 15, 15]),
  getInitialValues([-10, 3, 3])
]

describe('composables/useRenderStats', () => {
  assertions.forEach((given, index) =>
    test(`should render stats: ${index}`, () => {
      const { renderedEnergy, renderedHappiness, renderedHunger } = useRenderStats(given)
      expect(renderedEnergy.value).toMatchSnapshot()
      expect(renderedHappiness.value).toMatchSnapshot()
      expect(renderedHunger.value).toMatchSnapshot()
    })
  )
})
