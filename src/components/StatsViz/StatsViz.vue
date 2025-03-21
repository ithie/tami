<template>
  <pre>Hunger:     {{ renderedHunger }}</pre>
  <pre>Happieness: {{ renderedHappieness }}</pre>
  <pre>Energy:     {{ renderedEnergy }}</pre>
  <pre>Age:        {{ age }}</pre>
</template>

<script lang="ts" setup>
import useMood from '../../composables/useMood/useMood'
import useRenderStats from '../../composables/useRenderStats/useRenderStats'

const { hunger, happieness, energy, age } = useMood()

const { renderedEnergy, renderedHappieness, renderedHunger } = useRenderStats({
  hunger,
  happieness,
  energy
})
</script>
