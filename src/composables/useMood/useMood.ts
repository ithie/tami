import { ref } from 'vue'
import { ACTIONS } from '@/enums/ACTIONS'
import { type IMoodAge } from '@/interfaces/IMood'
import restrictRanges from '../utils/restrictRanges'

const hunger = ref(5)
const happiness = ref(5)
const energy = ref(5)
const age = ref(1)

const restrictToMaximum = () => {
  restrictRanges(hunger)
  restrictRanges(happiness)
  restrictRanges(energy)
}

const decline = () => {
  age.value++
  hunger.value += 1
  happiness.value -= 1
  energy.value -= 1
}

const ACTION_HANDLES = {
  [ACTIONS.FEED]: () => {
    hunger.value -= 2
    happiness.value += 1
    energy.value += 2
  },
  [ACTIONS.PLAY]: () => {
    happiness.value = happiness.value + 2
    energy.value -= 1
    hunger.value += 1
  },
  [ACTIONS.SLEEP]: () => {
    hunger.value += 3
    energy.value += 2
  }
}

export default (vals?: IMoodAge) => {
  if (vals) {
    hunger.value = vals.hunger || 5
    happiness.value = vals.happiness || 5
    energy.value = vals.energy || 5
    age.value = vals.age || 1
  }

  return {
    doAction: (action: ACTIONS) => {
      decline()

      if (action !== ACTIONS.NOTHING) {
        ACTION_HANDLES[action]()
      }

      restrictToMaximum()
    },
    age,
    hunger,
    happiness,
    energy
  }
}
