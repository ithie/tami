<template>
  <div class="tami-border">
    <pre>{{ tami }}</pre>
  </div>
</template>

<script lang="ts" setup>
import useRenderMood from '@/composables/useRenderMood/useRenderMood'
import useMood from '@/composables/useMood/useMood'

const { hunger, happiness, energy } = useMood()

const tami = useRenderMood({ hunger, happiness, energy })
</script>

<style lang="scss">
.tami-border {
  text-align: center;
  background-color: gainsboro;
  border: 1px solid black;
}
</style>
