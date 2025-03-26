<template>
  <pre>{{ labelHunger }}</pre>
  <pre>{{ labelHappiness }}</pre>
  <pre>{{ labelEnergy }}</pre>
  <pre>{{ labelAge }}</pre>
</template>

<script lang="ts" setup>
import useLabels from './composables/useLabels/useLabels'

const { labelHunger, labelHappiness, labelEnergy, labelAge } = useLabels()
</script>
