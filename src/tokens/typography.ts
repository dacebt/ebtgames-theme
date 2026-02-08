import { defineTokens } from '@chakra-ui/react'

/**
 * Typography tokens that reference CSS variables from cssVariables.ts
 */
export const fonts = defineTokens.fonts({
  display: { value: 'var(--font-display)' },
  heading: { value: 'var(--font-heading)' },
  body: { value: 'var(--font-body)' },
})

export const fontSizes = defineTokens.fontSizes({
  xs: { value: 'var(--font-size-xs)' }, // 12px - helper text
  sm: { value: 'var(--font-size-sm)' }, // 14px - secondary labels
  base: { value: 'var(--font-size-base)' }, // 16px - body text
  md: { value: 'var(--font-size-md)' }, // 18px - emphasized body
  lg: { value: 'var(--font-size-lg)' }, // 20px - section headings
  xl: { value: 'var(--font-size-xl)' }, // 24px - modal titles
  '2xl': { value: 'var(--font-size-2xl)' }, // 32px - page titles
  '3xl': { value: 'var(--font-size-3xl)' }, // 48px - hero text
  '4xl': { value: 'var(--font-size-4xl)' }, // 64px - display text

  // Responsive sizes
  cell: { value: 'var(--font-size-cell)' },
  hero: { value: 'var(--font-size-hero)' },
  subtitle: { value: 'var(--font-size-subtitle)' },
})

export const fontWeights = defineTokens.fontWeights({
  normal: { value: 'var(--font-weight-normal)' },
  medium: { value: 'var(--font-weight-medium)' },
  bold: { value: 'var(--font-weight-bold)' },
})

export const letterSpacings = defineTokens.letterSpacings({
  tight: { value: 'var(--letter-spacing-tight)' },
  normal: { value: 'var(--letter-spacing-normal)' },
  wide: { value: 'var(--letter-spacing-wide)' },
})
