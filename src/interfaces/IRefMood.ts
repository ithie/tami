import type { Ref } from 'vue'

export default interface IRefMood {
  hunger: Ref<number>
  happiness: Ref<number>
  energy: Ref<number>
}

export interface IRefMoodAge extends IRefMood {
  age: Ref<number>
}
