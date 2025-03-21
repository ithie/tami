import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BorderWrapper from './BorderWrapper.vue'

describe('components/BorderWrapper', () => {
  test('should render', async () => {
    const wrapper = mount(BorderWrapper)

    expect(wrapper.element).toMatchSnapshot()
  })
  test('should render without child', async () => {
    const wrapper = mount({
      components: { BorderWrapper },
      template: '<BorderWrapper><div>Child Element</div></BorderWrapper>'
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
