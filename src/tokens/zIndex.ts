import { defineTokens } from '@chakra-ui/react'

/**
 * Z-index tokens that reference CSS variables from cssVariables.ts
 */
export const zIndex = defineTokens.zIndex({
  base: { value: 'var(--z-index-base)' },
  dropdown: { value: 'var(--z-index-dropdown)' },
  overlay: { value: 'var(--z-index-overlay)' },
  modal: { value: 'var(--z-index-modal)' },
  toast: { value: 'var(--z-index-toast)' },
  fullscreen: { value: 'var(--z-index-fullscreen)' },
})
