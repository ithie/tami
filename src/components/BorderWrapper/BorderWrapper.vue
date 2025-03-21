<template>
  <div class="border-all">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.border-all {
  max-width: 300px;
  background-color: lightblue;
  padding: 15px;
}
</style>
