import { describe, expect, it } from 'vitest'
import useMood from './useMood'
import { ACTIONS } from '../../enums/ACTIONS'
import { unref } from 'vue'

const assertValueChanges = (expected: {
  hunger: number
  happieness: number
  energy: number
  age: number
}) => {
  const { hunger, happieness, energy, age } = useMood()
  expect({
    hunger: unref(hunger),
    happieness: unref(happieness),
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
      happieness: {
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
    const { hunger, happieness, energy, age } = useMood({
      hunger: 15,
      happieness: 25,
      energy: 35,
      age: 11
    })

    expect(hunger.value).toEqual(15)
    expect(happieness.value).toEqual(25)
    expect(energy.value).toEqual(35)
    expect(age.value).toEqual(11)
  })
  describe('handle doAction', () => {
    const assertionActionsSet: Array<
      [ACTIONS, Array<{ age: number; energy: number; happieness: number; hunger: number }>]
    > = [
      [
        ACTIONS.FEED,
        [
          { age: 2, energy: 6, happieness: 5, hunger: 4 },
          { age: 3, energy: 7, happieness: 5, hunger: 3 },
          { age: 4, energy: 8, happieness: 5, hunger: 2 },
          { age: 5, energy: 9, happieness: 5, hunger: 1 },
          { age: 6, energy: 10, happieness: 5, hunger: 0 },
          { age: 7, energy: 10, happieness: 5, hunger: 0 }
        ]
      ],
      [
        ACTIONS.PLAY,
        [
          { age: 2, energy: 3, happieness: 6, hunger: 7 },
          { age: 3, energy: 1, happieness: 7, hunger: 9 },
          { age: 4, energy: 0, happieness: 8, hunger: 10 },
          { age: 5, energy: 0, happieness: 9, hunger: 10 },
          { age: 6, energy: 0, happieness: 10, hunger: 10 },
          { age: 7, energy: 0, happieness: 10, hunger: 10 }
        ]
      ],
      [
        ACTIONS.SLEEP,
        [
          { age: 2, energy: 6, happieness: 4, hunger: 9 },
          { age: 3, energy: 7, happieness: 3, hunger: 10 },
          { age: 4, energy: 8, happieness: 2, hunger: 10 },
          { age: 5, energy: 9, happieness: 1, hunger: 10 },
          { age: 6, energy: 10, happieness: 0, hunger: 10 },
          { age: 7, energy: 10, happieness: 0, hunger: 10 }
        ]
      ],
      [
        ACTIONS.NOTHING,
        [
          { age: 2, energy: 4, happieness: 4, hunger: 6 },
          { age: 3, energy: 3, happieness: 3, hunger: 7 },
          { age: 4, energy: 2, happieness: 2, hunger: 8 },
          { age: 5, energy: 1, happieness: 1, hunger: 9 },
          { age: 6, energy: 0, happieness: 0, hunger: 10 },
          { age: 7, energy: 0, happieness: 0, hunger: 10 }
        ]
      ]
    ]
    assertionActionsSet.forEach((assertionAction) => {
      const [action, assertions] = assertionAction
      it(`should change handle ${action}`, () => {
        const { doAction } = useMood({
          hunger: 5,
          happieness: 5,
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
