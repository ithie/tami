<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  width: 100%;

  > * {
    flex-grow: 1;
  }
}
</style>
