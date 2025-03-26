import type IRefMood from '@/interfaces/IRefMood'
import { ref } from 'vue'

export default <T = IRefMood>(
  [energy = 5, happiness = 5, hunger = 5]: [number, number, number],
  noRef = false
): T =>
  ({
    energy: noRef ? energy : ref(energy),
    happiness: noRef ? happiness : ref(happiness),
    hunger: noRef ? hunger : ref(hunger)
  }) as T
