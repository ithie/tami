import { describe, expect, test } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import useI18n, { type TValidLocales } from '@/composables/useI18n/useI18n'

const testSets: Record<string, string>[] = [
  { lang: '', translation: 'Feed' },
  { lang: 'de', translation: 'Füttern' }
]
describe('useI18n', () => {
  testSets.forEach(({ lang = 'initial', translation }) => {
    test(`${lang} lang translation`, () => {
      const i18n = useI18n()

      if (lang !== 'initial') {
        i18n.setLocale(lang as TValidLocales)
      }

      expect(i18n.t('actions.feed')).toEqual(translation)
    })
    test(`${lang} lang translation but unknown key`, () => {
      const i18n = useI18n()

      expect(i18n.t('un.known.key')).toEqual('un.known.key')
    })
  })
  describe('switches between languages "en" and "de"', () => {
    test('as function', async () => {
      const { setLocale, t } = useI18n()

      setLocale('en' as TValidLocales)

      await nextTick()

      expect(t('actions.sleep')).toEqual('Sleep')

      setLocale('de' as TValidLocales)

      await nextTick()

      expect(t('actions.sleep')).toEqual('Schlafen')
    })
    test('in a rendered component', async () => {
      const { setLocale } = useI18n()

      setLocale('en' as TValidLocales)

      const wrapper = mount({
        template: "<div>{{t('actions.sleep')}}</div>",
        setup() {
          return {
            t: useI18n().t
          }
        }
      })

      expect(wrapper.element).toMatchSnapshot()

      setLocale('de' as TValidLocales)

      await nextTick()

      expect(wrapper.element).toMatchSnapshot()

      setLocale('en' as TValidLocales)

      await nextTick()

      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
