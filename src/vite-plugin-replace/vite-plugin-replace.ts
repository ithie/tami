import type { Plugin } from 'vite'

const applyPlaceholders = (placeholders: Record<string, string>, code: string): string => {
  let transformedCode = code
  for (const [placeholder, value] of Object.entries(placeholders)) {
    const regex = new RegExp(placeholder, 'g')
    transformedCode = transformedCode.replace(regex, value)
  }
  return transformedCode
}

export default (placeholders: Record<string, string>): Plugin => {
  return {
    name: 'vite-plugin-replace',
    transform(code: string, id: string) {
      if (id.endsWith('.vue')) {
        return {
          code: applyPlaceholders(placeholders, code),
          map: null
        }
      }
      try {
        if (
          id.endsWith('.ts') &&
          (id.includes('/composables/') || id.includes('/components/') || id.includes('/utils/'))
        ) {
          return applyPlaceholders(placeholders, code)
        }
      } catch (e) {
        console.log(`Exception loading ${id}`, e)
      }
    }
  }
}
