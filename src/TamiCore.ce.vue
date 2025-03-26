<template>
  <BorderWrapper>
    <LocaleSwitch />
    <HorizontalDivider :spacing="15" />
    <TamiExpression />
    <StatsViz />
    <ActionBar />
  </BorderWrapper>
</template>

<script lang="ts" setup>
import ActionBar from '@/components/ActionBar/ActionBar.vue'
import BorderWrapper from '@/components/BorderWrapper/BorderWrapper.vue'
import HorizontalDivider from '@/components/HorizontalDivider/HorizontalDivider.vue'
import LocaleSwitch from '@/components/LocaleSwitch/LocaleSwitch.vue'
import StatsViz from '@/components/StatsViz/StatsViz.vue'
import TamiExpression from '@/components/TamiExpression/TamiExpression.vue'
</script>
