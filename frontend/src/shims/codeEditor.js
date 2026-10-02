// Shim for `frappe-ui/code-editor`: frappe's CodeEditorField imports
// `CodePreview`, which the pinned frappe-ui release does not export yet.
// Re-export the real module and add a plain-text fallback until it ships.
import { defineComponent, h } from 'vue'

export * from '../../node_modules/frappe-ui/src/molecules/code-editor/index.ts'

export const CodePreview = defineComponent({
  name: 'CodePreview',
  props: {
    modelValue: { type: String, default: '' },
    language: { type: String, default: '' },
  },
  setup(props) {
    return () =>
      h(
        'pre',
        { class: 'whitespace-pre-wrap break-words text-p-sm' },
        props.modelValue,
      )
  },
})
