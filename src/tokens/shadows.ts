import { defineTokens } from '@chakra-ui/react'

/**
 * Shadow tokens that reference CSS variables from cssVariables.ts
 */
export const shadows = defineTokens.shadows({
  // Depth shadows (layered)
  xs: { value: 'var(--shadow-xs)' },
  sm: { value: 'var(--shadow-sm)' },
  md: { value: 'var(--shadow-md)' },
  lg: { value: 'var(--shadow-lg)' },
  xl: { value: 'var(--shadow-xl)' },

  // Glow shadows (primary - purple)
  glow: {
    primary: { value: 'var(--shadow-glow-primary)' },
    'primary-lg': { value: 'var(--shadow-glow-primary-lg)' },
    'primary-xl': { value: 'var(--shadow-glow-primary-xl)' },

    // Secondary (teal)
    secondary: { value: 'var(--shadow-glow-secondary)' },
    'secondary-lg': { value: 'var(--shadow-glow-secondary-lg)' },

    // Accent (rose)
    accent: { value: 'var(--shadow-glow-accent)' },
    'accent-lg': { value: 'var(--shadow-glow-accent-lg)' },

    // Legacy aliases for backward compatibility
    utility: { value: 'var(--shadow-glow-secondary)' },
    'utility-lg': { value: 'var(--shadow-glow-secondary-lg)' },
    emphasis: { value: 'var(--shadow-glow-accent)' },
    'emphasis-lg': { value: 'var(--shadow-glow-accent-lg)' },

    // Error (red)
    error: { value: 'var(--shadow-glow-error)' },
  },

  // Inset shadows
  inset: {
    primary: { value: 'var(--shadow-inset-primary)' },
    subtle: { value: 'var(--shadow-inset-subtle)' },
    deep: { value: 'var(--shadow-inset-deep)' },
  },
})
