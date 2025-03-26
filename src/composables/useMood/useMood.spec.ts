import { describe, expect, it } from 'vitest'
import { unref } from 'vue'
import useMood from '@/composables/useMood/useMood'
import { ACTIONS } from '@/enums/ACTIONS'

const assertValueChanges = (expected: {
  hunger: number
  happiness: number
  energy: number
  age: number
}) => {
  const { hunger, happiness, energy, age } = useMood()
  expect({
    hunger: unref(hunger),
    happiness: unref(happiness),
    energy: unref(energy),
    age: unref(age)
  }).toEqual(expected)
}

describe('composables/useMood', () => {
  it('should assert initial values', () => {
    expect(JSON.parse(JSON.stringify(useMood()))).toEqual({
      age: {
        __v_isRef: true,
        __v_isShallow: false,
        _rawValue: 1,
        _value: 1,
        dep: {
          sc: 0,
          version: 0
        }
      },
      energy: {
        __v_isRef: true,
        __v_isShallow: false,
        _rawValue: 5,
        _value: 5,
        dep: {
          sc: 0,
          version: 0
        }
      },
      happiness: {
        __v_isRef: true,
        __v_isShallow: false,
        _rawValue: 5,
        _value: 5,
        dep: {
          sc: 0,
          version: 0
        }
      },
      hunger: {
        __v_isRef: true,
        __v_isShallow: false,
        _rawValue: 5,
        _value: 5,
        dep: {
          sc: 0,
          version: 0
        }
      }
    })
  })
  it('should set initial values', () => {
    const { hunger, happiness, energy, age } = useMood({
      hunger: 15,
      happiness: 25,
      energy: 35,
      age: 11
    })

    expect(hunger.value).toEqual(15)
    expect(happiness.value).toEqual(25)
    expect(energy.value).toEqual(35)
    expect(age.value).toEqual(11)
  })
  describe('handle doAction', () => {
    const assertionActionsSet: Array<
      [ACTIONS, Array<{ age: number; energy: number; happiness: number; hunger: number }>]
    > = [
      [
        ACTIONS.FEED,
        [
          { age: 2, energy: 6, happiness: 5, hunger: 4 },
          { age: 3, energy: 7, happiness: 5, hunger: 3 },
          { age: 4, energy: 8, happiness: 5, hunger: 2 },
          { age: 5, energy: 9, happiness: 5, hunger: 1 },
          { age: 6, energy: 10, happiness: 5, hunger: 0 },
          { age: 7, energy: 10, happiness: 5, hunger: 0 }
        ]
      ],
      [
        ACTIONS.PLAY,
        [
          { age: 2, energy: 3, happiness: 6, hunger: 7 },
          { age: 3, energy: 1, happiness: 7, hunger: 9 },
          { age: 4, energy: 0, happiness: 8, hunger: 10 },
          { age: 5, energy: 0, happiness: 9, hunger: 10 },
          { age: 6, energy: 0, happiness: 10, hunger: 10 },
          { age: 7, energy: 0, happiness: 10, hunger: 10 }
        ]
      ],
      [
        ACTIONS.SLEEP,
        [
          { age: 2, energy: 6, happiness: 4, hunger: 9 },
          { age: 3, energy: 7, happiness: 3, hunger: 10 },
          { age: 4, energy: 8, happiness: 2, hunger: 10 },
          { age: 5, energy: 9, happiness: 1, hunger: 10 },
          { age: 6, energy: 10, happiness: 0, hunger: 10 },
          { age: 7, energy: 10, happiness: 0, hunger: 10 }
        ]
      ],
      [
        ACTIONS.NOTHING,
        [
          { age: 2, energy: 4, happiness: 4, hunger: 6 },
          { age: 3, energy: 3, happiness: 3, hunger: 7 },
          { age: 4, energy: 2, happiness: 2, hunger: 8 },
          { age: 5, energy: 1, happiness: 1, hunger: 9 },
          { age: 6, energy: 0, happiness: 0, hunger: 10 },
          { age: 7, energy: 0, happiness: 0, hunger: 10 }
        ]
      ]
    ]
    assertionActionsSet.forEach((assertionAction) => {
      const [action, assertions] = assertionAction
      it(`should change handle ${action}`, () => {
        const { doAction } = useMood({
          hunger: 5,
          happiness: 5,
          energy: 5,
          age: 1
        })

        assertions.forEach((assertion) => {
          doAction(action)
          assertValueChanges(assertion)
        })
      })
    })
  })
})
