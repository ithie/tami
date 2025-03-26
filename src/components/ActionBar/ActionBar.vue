<template>
  <FlexWrapper>
    <button @click="doAction(ACTIONS.FEED)">{{ t('actions.feed') }}</button>
    <button @click="doAction(ACTIONS.PLAY)">{{ t('actions.play') }}</button>
    <button @click="doAction(ACTIONS.SLEEP)">{{ t('actions.sleep') }}</button>
    <button @click="doAction(ACTIONS.NOTHING)">{{ t('actions.nothing') }}</button>
  </FlexWrapper>
</template>

<script lang="ts" setup>
import useI18n from '@/composables/useI18n/useI18n'
import useMood from '@/composables/useMood/useMood'
import { ACTIONS } from '@/enums/ACTIONS'
import FlexWrapper from '@/components/FlexWrapper/FlexWrapper.vue'

const { t } = useI18n()
const { doAction } = useMood()
</script>
