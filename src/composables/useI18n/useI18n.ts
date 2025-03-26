import { computed, ref, type Ref } from 'vue'

const FALLBACK_LOCALE = 'en'

export const VALID_LOCALES = <const>[FALLBACK_LOCALE, 'de', 'cs', 'it', 'es', 'fr']

export type TValidLocales = (typeof VALID_LOCALES)[number]

const translations: Record<TValidLocales, Record<string, Record<string, string>>> = {
  de: {
    actions: {
      feed: 'Füttern',
      play: 'Spielen',
      sleep: 'Schlafen',
      nothing: 'Nichts'
    },
    labels: {
      hunger: 'Hunger',
      happiness: 'Glück',
      energy: 'Kraft',
      age: 'Alter'
    }
  },
  en: {
    actions: {
      feed: 'Feed',
      play: 'Play',
      sleep: 'Sleep',
      nothing: 'Nothing'
    },
    labels: {
      hunger: 'Hunger',
      happiness: 'Happiness',
      energy: 'Energy',
      age: 'Age'
    }
  },
  cs: {
    actions: {
      feed: 'Nakrmit',
      play: 'Hrát si',
      sleep: 'Spát',
      nothing: 'Nic'
    },
    labels: {
      hunger: 'Hlad',
      happiness: 'Štěstí',
      energy: 'Energie',
      age: 'Věk'
    }
  },
  it: {
    actions: {
      feed: 'Nutrire',
      play: 'Giocare',
      sleep: 'Dormire',
      nothing: 'Niente'
    },
    labels: {
      hunger: 'Fame',
      happiness: 'Felicità',
      energy: 'Energia',
      age: 'Età'
    }
  },
  es: {
    actions: {
      feed: 'Alimentar',
      play: 'Jugar',
      sleep: 'Dormir',
      nothing: 'Nada'
    },
    labels: {
      hunger: 'Hambre',
      happiness: 'Felicidad',
      energy: 'Energía',
      age: 'Edad'
    }
  },
  fr: {
    actions: {
      feed: 'Nourrir',
      play: 'Jouer',
      sleep: 'Dormir',
      nothing: 'Rien'
    },
    labels: {
      hunger: 'Faim',
      happiness: 'Bonheur',
      energy: 'Énergie',
      age: 'Âge'
    }
  }
}

const currentLocale: Ref<TValidLocales> = ref(FALLBACK_LOCALE)

const isValidLocale = (locale: string) => {
  return VALID_LOCALES.includes(locale as unknown as TValidLocales)
}

const setLocale = (locale: TValidLocales = FALLBACK_LOCALE) => {
  currentLocale.value = isValidLocale(locale) ? locale : FALLBACK_LOCALE
}

const currentMessageSet = computed(() => {
  return translations[currentLocale.value]
})

export default () => {
  return {
    setLocale,
    t: (key: string): string => {
      const keys = key.split('.')

      if (!key || keys.length <= 0) {
        return key
      }

      let value = currentMessageSet.value

      for (const k of keys) {
        // @ts-expect-error Type-cast error is okay
        value = value?.[k]
        if (!value) {
          return key
        }
      }

      return value as unknown as string
    }
  }
}
