import { MOODS } from '../../enums/MOODS'
import { describe, expect, test } from 'vitest'
import useRenderMood from './useRenderMood'
import { type Ref } from 'vue'
import getInitialValues from '../utils/getInitialValues'

const assertions: Array<
  [MOODS, { hunger: Ref<number>; happieness: Ref<number>; energy: Ref<number> }]
> = [
  [MOODS.TIRED, getInitialValues([0, 5, 5])],
  [MOODS.VERY_HUNGRY, getInitialValues([5, 9, 5])],
  [MOODS.TIRED, getInitialValues([5, 5, 3])],
  [MOODS.HUNGRY, getInitialValues([5, 5, 7])],
  [MOODS.SUPER_HAPPY, getInitialValues([5, 9, 5])],
  [MOODS.HAPPY, getInitialValues([5, 7, 5])],
  [MOODS.HAPPY, getInitialValues([5, 5, 5])]
]
describe('composables/useRenderMood', () => {
  assertions.forEach(([mood, given]) =>
    test(`should render mood: ${mood}`, () => {
      expect(useRenderMood(given).value).toMatchSnapshot()
    })
  )
})
