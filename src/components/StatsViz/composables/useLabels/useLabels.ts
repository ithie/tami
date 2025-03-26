import { computed } from 'vue'
import useMood from '@/composables/useMood/useMood'
import useRenderStats from '@/composables/useRenderStats/useRenderStats'
import renderProgressPart from '@/composables/utils/renderProgressPart'
import useI18n from '@/composables/useI18n/useI18n'

const maxLength = 15
const generateLabel = (
  key: 'hunger' | 'happiness' | 'energy' | 'age',
  i18n: (key: string) => string
) => {
  const label = `${i18n(`labels.${key}`)}:`

  const diffLength = maxLength - label.length

  return `${label}${renderProgressPart(' ', diffLength)}`
}

export default () => {
  const { hunger, happiness, energy, age } = useMood()

  const i18n = useI18n().t

  const { renderedEnergy, renderedHappiness, renderedHunger } = useRenderStats({
    hunger,
    happiness,
    energy
  })

  return {
    labelHunger: computed(() => `${generateLabel('hunger', i18n)}${renderedHunger.value}`),
    labelHappiness: computed(() => `${generateLabel('happiness', i18n)}${renderedHappiness.value}`),
    labelEnergy: computed(() => `${generateLabel('energy', i18n)}${renderedEnergy.value}`),
    labelAge: computed(() => `${generateLabel('age', i18n)}${age.value}`)
  }
}
