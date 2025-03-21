import type { Ref } from 'vue'

export default (item: Ref<number>) => {
  if (item.value > 10) {
    item.value = 10
  }
  if (item.value < 0) {
    item.value = 0
  }
}
