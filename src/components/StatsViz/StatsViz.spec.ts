import { describe, test, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import StatsViz from '@/components/StatsViz/StatsViz.vue'
import useMood from '@/composables/useMood/useMood'
import { type DefineComponent } from 'vue'

describe('components/StatsViz', () => {
  test('should render', async () => {
    const wrapper = mount(StatsViz as DefineComponent)

    useMood({ hunger: 3, happiness: 9, energy: 6, age: 3 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })
  test('should render max ranges', async () => {
    const wrapper = mount(StatsViz as DefineComponent)

    useMood({ hunger: 10, happiness: 10, energy: 10, age: 1 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()

    useMood({ hunger: 15, happiness: 15, energy: 15, age: 1 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })
  test('should render min ranges', async () => {
    const wrapper = mount(StatsViz as DefineComponent)

    useMood({ hunger: 0, happiness: 0, energy: 0, age: 1 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()

    useMood({ hunger: -15, happiness: -15, energy: -15, age: 1 })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })
})
