import { describe, test, expect } from 'vitest'
import type { DefineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import TamiCore from '@/TamiCore.ce.vue'

describe('TamiCore', () => {
  test('should render', async () => {
    const wrapper = mount(TamiCore as DefineComponent)

    expect(wrapper.element).toMatchSnapshot()
  })
})
