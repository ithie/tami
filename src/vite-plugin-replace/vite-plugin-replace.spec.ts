import { describe, it, expect } from 'vitest'
import vitePluginReplace from './vite-plugin-replace'

describe('vitePluginReplace', () => {
  it('should replace version in .vue files', () => {
    const pluginTransform = vitePluginReplace({
      __VERSION__: 'demo-version-as-replacement'
    }).transform as (code: string, id: string) => string

    const code = '<template><div>__VERSION__</div></template>'

    const id = 'test-file.vue'
    const result = pluginTransform(code, id)

    expect(result).toEqual({
      code: '<template><div>demo-version-as-replacement</div></template>',
      map: null
    })
  })
  it('should not replace base-path in unmatching .ts files', () => {
    const pluginTransform = vitePluginReplace({
      __BASE_VERSION__: 'demo/base/path'
    }).transform as (code: string, id: string) => string

    const code = 'export default () => "__BASE_VERSION__"'

    const id = 'test-file.ts'
    const result = pluginTransform(code, id)

    expect(result).toBeUndefined()
  })
  it('should replace base-path in matching .ts files', () => {
    const pluginTransform = vitePluginReplace({
      __BASE_VERSION__: 'demo/base/path'
    }).transform as (code: string, id: string) => string

    const code = 'export default () => "__BASE_VERSION__"'

    expect(pluginTransform(code, '/composables/test-file.ts')).toEqual(
      'export default () => "demo/base/path"'
    )
    expect(pluginTransform(code, '/components/test-file.ts')).toEqual(
      'export default () => "demo/base/path"'
    )
    expect(pluginTransform(code, '/utils/test-file.ts')).toEqual(
      'export default () => "demo/base/path"'
    )
  })
})
