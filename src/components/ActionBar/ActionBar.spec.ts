import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ActionBar from './ActionBar.vue'

describe('components/ActionBar', () => {
  test('should render', async () => {
    const wrapper = mount(ActionBar)

    expect(wrapper.element).toMatchSnapshot()
  })
})
