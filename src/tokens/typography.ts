import { defineTokens } from '@chakra-ui/react'

export const fonts = defineTokens.fonts({
  display: { value: "'Courier New', 'Courier', monospace" },
  heading: { value: "'Courier New', 'Courier', monospace" },
  body: { value: "'Courier New', 'Courier', monospace" },
})

export const fontSizes = defineTokens.fontSizes({
  xs: { value: '0.75rem' },     // 12px - helper text
  sm: { value: '0.875rem' },    // 14px - secondary labels
  base: { value: '1rem' },      // 16px - body text
  md: { value: '1.125rem' },    // 18px - emphasized body
  lg: { value: '1.25rem' },     // 20px - section headings
  xl: { value: '1.5rem' },      // 24px - modal titles
  '2xl': { value: '2rem' },     // 32px - page titles
  '3xl': { value: '3rem' },     // 48px - hero text
  '4xl': { value: '4rem' },     // 64px - display text

  // Responsive sizes
  cell: { value: 'clamp(1rem, 3vw, 1.5rem)' },
  hero: { value: 'clamp(2.5rem, 8vw, 4rem)' },
  subtitle: { value: 'clamp(1rem, 3vw, 1.25rem)' },
})

export const fontWeights = defineTokens.fontWeights({
  normal: { value: 400 },
  medium: { value: 600 },
  bold: { value: 700 },
})

export const letterSpacings = defineTokens.letterSpacings({
  tight: { value: '0.05em' },
  normal: { value: '0.1em' },
  wide: { value: '0.2em' },
})
