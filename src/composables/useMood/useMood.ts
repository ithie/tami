import { ref } from 'vue'
import { ACTIONS } from '../../enums/ACTIONS'
import restrictRanges from '../utils/restrictRanges'

const hunger = ref(5)
const happieness = ref(5)
const energy = ref(5)
const age = ref(1)

const restrictToMaximum = () => {
  restrictRanges(hunger)
  restrictRanges(happieness)
  restrictRanges(energy)
}

const ACTION_HANDLES = {
  [ACTIONS.FEED]: () => {
    hunger.value -= 2
    happieness.value += 1
    energy.value += 2
  },
  [ACTIONS.PLAY]: () => {
    happieness.value = happieness.value + 2
    energy.value -= 1
    hunger.value += 1
  },
  [ACTIONS.SLEEP]: () => {
    hunger.value += 3
    energy.value += 2
  }
}

export default (vals?: { hunger?: number; happieness?: number; energy?: number; age?: number }) => {
  if (vals) {
    hunger.value = vals.hunger || 5
    happieness.value = vals.happieness || 5
    energy.value = vals.energy || 5
    age.value = vals.age || 1
  }

  return {
    doAction: (action: ACTIONS) => {
      age.value++
      hunger.value += 1
      happieness.value -= 1
      energy.value -= 1

      if (action !== ACTIONS.NOTHING) {
        ACTION_HANDLES[action]()
      }

      restrictToMaximum()
    },
    age,
    hunger,
    happieness,
    energy
  }
}
