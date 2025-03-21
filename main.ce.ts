import type { DefineComponent } from 'vue'
import registry from './src/registry'
import TamiCore from './src/TamiCore.ce.vue'

registry('tami-core', TamiCore as DefineComponent)

// register global typings
declare module 'vue' {
  export interface GlobalComponents {
    'tami-core': typeof TamiCore
  }
}
