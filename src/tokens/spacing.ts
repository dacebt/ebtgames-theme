import { defineTokens } from '@chakra-ui/react'

/**
 * Spacing tokens that reference CSS variables from cssVariables.ts
 */
export const spacing = defineTokens.spacing({
  '2xs': { value: 'var(--spacing-2xs)' }, // 2px - micro gaps
  xs: { value: 'var(--spacing-xs)' }, // 4px
  sm: { value: 'var(--spacing-sm)' }, // 8px
  md: { value: 'var(--spacing-md)' }, // 16px
  lg: { value: 'var(--spacing-lg)' }, // 24px
  xl: { value: 'var(--spacing-xl)' }, // 32px
  '2xl': { value: 'var(--spacing-2xl)' }, // 48px
})
