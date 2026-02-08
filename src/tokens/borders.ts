import { defineTokens } from '@chakra-ui/react'

/**
 * Border tokens that reference CSS variables from cssVariables.ts
 */
export const borderWidths = defineTokens.borderWidths({
  thin: { value: 'var(--border-width-thin)' },
  base: { value: 'var(--border-width-base)' },
  thick: { value: 'var(--border-width-thick)' },
})

export const radii = defineTokens.radii({
  sm: { value: 'var(--radius-sm)' },
  md: { value: 'var(--radius-md)' },
  lg: { value: 'var(--radius-lg)' },
})
