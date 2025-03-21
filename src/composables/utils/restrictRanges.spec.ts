import { describe, expect, it } from 'vitest'
import restrictRanges from './restrictRanges'
import { ref } from 'vue'

const assertRangeChanges = (assertions: Array<[number, number]>) => {
  assertions.forEach(([given, expected]) => {
    const item = ref(given)
    restrictRanges(item)

    expect(item.value).toEqual(expected)
  })
}

describe('composables/utils/restrictRanges', () => {
  it('should not change the value', () => {
    assertRangeChanges([
      [2, 2],
      [9, 9],
      [4, 4]
    ])
  })
  it('should change the values according to the limits', () => {
    assertRangeChanges([
      [10, 10],
      [11, 10],
      [40, 10],
      [0, 0],
      [-1, 0],
      [-40, 0]
    ])
  })
})
