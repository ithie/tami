import { computed, ref, watchEffect, type Ref } from 'vue'
import { MOODS } from '../../enums/MOODS'

const EXPRESSIONS = {
  [MOODS.NEUTRAL]: '(o o)',
  [MOODS.HUNGRY]: '(- - )',
  [MOODS.VERY_HUNGRY]: '(x x)',
  [MOODS.HAPPY]: '(* *)',
  [MOODS.SUPER_HAPPY]: '(^ ^)',
  [MOODS.TIRED]: '(u u)'
}

export default ({
  hunger,
  happieness,
  energy
}: {
  hunger: Ref<number>
  happieness: Ref<number>
  energy: Ref<number>
}) => {
  const mood = ref(MOODS.NEUTRAL)

  watchEffect(() => {
    if (energy.value === 0) {
      mood.value = MOODS.TIRED
    } else if (hunger.value >= 9) {
      mood.value = MOODS.VERY_HUNGRY
    } else if (hunger.value <= 3) {
      mood.value = MOODS.TIRED
    } else if (hunger.value >= 7) {
      mood.value = MOODS.HUNGRY
    } else if (happieness.value >= 9) {
      mood.value = MOODS.SUPER_HAPPY
    } else if (happieness.value >= 7) {
      mood.value = MOODS.HAPPY
    } else {
      mood.value = MOODS.NEUTRAL
    }
  })

  return computed(() => EXPRESSIONS[mood.value])
}
