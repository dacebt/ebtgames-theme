import { defineTokens } from '@chakra-ui/react'

export const spacing = defineTokens.spacing({
  '2xs': { value: '0.125rem' },  // 2px - micro gaps
  xs: { value: '0.25rem' },      // 4px
  sm: { value: '0.5rem' },       // 8px
  md: { value: '1rem' },         // 16px
  lg: { value: '1.5rem' },      // 24px
  xl: { value: '2rem' },         // 32px
  '2xl': { value: '3rem' },      // 48px
})
