import { computed, type Ref } from 'vue'

const max = 10

const renderProgressPart = (element: string, amount: number): string =>
  new Array(amount).join(element)

const renderProgress = (amount: number) =>
  `${amount <= 0 ? '' : renderProgressPart('█', amount + 1)}${amount >= max ? '' : renderProgressPart(' ', max - amount + 1)}`

export default ({
  hunger,
  happieness,
  energy
}: {
  hunger: Ref<number>
  happieness: Ref<number>
  energy: Ref<number>
}) => {
  return {
    renderedHunger: computed(() => renderProgress(hunger.value)),
    renderedHappieness: computed(() => renderProgress(happieness.value)),
    renderedEnergy: computed(() => renderProgress(energy.value))
  }
}
