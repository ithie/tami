<template>
  <div :style="styles"></div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const { spacing } = defineProps<{ spacing: number }>()
const styles = computed(
  () => `height: ${spacing}px;padding: 0; margin: 0;display:block;width:100%;`
)
</script>
