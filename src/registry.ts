import { type DefineComponent, defineCustomElement, h } from 'vue'

export default (tag: string, cmp: DefineComponent) => {
  window.customElements.define(
    tag,
    defineCustomElement({
      render: () => h(cmp),
      styles: cmp.styles
    })
  )
}
