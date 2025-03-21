<template>
  <div class="actions">
    <button @click="doAction(ACTIONS.FEED)">Feed</button>
    <button @click="doAction(ACTIONS.PLAY)">Play</button>
    <button @click="doAction(ACTIONS.SLEEP)">Sleep</button>
    <button @click="doAction(ACTIONS.NOTHING)">Nothing</button>
  </div>
</template>

<script lang="ts" setup>
import useMood from '../../composables/useMood/useMood'
import { ACTIONS } from '../../enums/ACTIONS'

const { doAction } = useMood()
</script>

<style lang="scss">
.actions {
  display: flex;
  width: 100%;

  > button {
    flex-grow: 1;
  }
}
</style>
