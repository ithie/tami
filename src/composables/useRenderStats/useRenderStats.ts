import { computed } from 'vue'
import type IRefMood from '@/interfaces/IRefMood'
import renderProgressPart from '../utils/renderProgressPart'

const max = 10

const renderProgress = (amount: number) =>
  `${amount <= 0 ? '' : renderProgressPart('█', amount + 1)}${amount >= max ? '' : renderProgressPart(' ', max - amount + 1)}`

export default ({ hunger, happiness, energy }: IRefMood) => {
  return {
    renderedHunger: computed(() => renderProgress(hunger.value)),
    renderedHappiness: computed(() => renderProgress(happiness.value)),
    renderedEnergy: computed(() => renderProgress(energy.value))
  }
}
