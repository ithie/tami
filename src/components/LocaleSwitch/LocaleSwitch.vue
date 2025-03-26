<template>
  <FlexWrapper>
    <button v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
      {{ locale.toLocaleUpperCase() }}
    </button>
  </FlexWrapper>
</template>

<script lang="ts" setup>
import useI18n, { VALID_LOCALES, type TValidLocales } from '@/composables/useI18n/useI18n'
import FlexWrapper from '@/components/FlexWrapper/FlexWrapper.vue'

const locales = VALID_LOCALES

const { setLocale } = useI18n()

const switchLocale = (locale: TValidLocales) => {
  setLocale(locale)
}
</script>
