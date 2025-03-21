import { ref, type Ref } from 'vue'

export default <T = Ref<number>>(
  [energy, happieness, hunger]: [number, number, number],
  noRef = false
): { energy: T; happieness: T; hunger: T } => ({
  energy: (noRef ? energy : ref(energy)) as T,
  happieness: (noRef ? happieness : ref(happieness)) as T,
  hunger: (noRef ? hunger : ref(hunger)) as T
})
