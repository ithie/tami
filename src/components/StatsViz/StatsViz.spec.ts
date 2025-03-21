import { describe, test, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import StatsViz from './StatsViz.vue'
import useMood from '../../composables/useMood/useMood'

describe('components/StatsViz', () => {
  test('should render', async () => {
    const wrapper = mount(StatsViz)

    useMood({ hunger: 3, happieness: 9, energy: 6, age: 3 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })
  test('should render max ranges', async () => {
    const wrapper = mount(StatsViz)

    useMood({ hunger: 10, happieness: 10, energy: 10, age: 1 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()

    useMood({ hunger: 15, happieness: 15, energy: 15, age: 1 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })
  test('should render min ranges', async () => {
    const wrapper = mount(StatsViz)

    useMood({ hunger: 0, happieness: 0, energy: 0, age: 1 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()

    useMood({ hunger: -15, happieness: -15, energy: -15, age: 1 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })
})
