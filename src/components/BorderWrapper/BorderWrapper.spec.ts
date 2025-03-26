import { describe, test, expect } from 'vitest'
import type { DefineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import BorderWrapper from '@/components/BorderWrapper/BorderWrapper.vue'

describe('components/BorderWrapper', () => {
  test('should render', async () => {
    const wrapper = mount(BorderWrapper as DefineComponent)

    expect(wrapper.element).toMatchSnapshot()
  })
  test('should render without child', async () => {
    const wrapper = mount({
      components: { BorderWrapper },
      template: '<BorderWrapper><div>Child Element</div></BorderWrapper>'
    } as unknown as DefineComponent)

    expect(wrapper.element).toMatchSnapshot()
  })
})
