import { defineTokens } from '@chakra-ui/react'

export const shadows = defineTokens.shadows({
  // Depth shadows (layered)
  xs: { value: '0 1px 2px rgba(0, 0, 0, 0.4)' },
  sm: { value: '0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)' },
  md: { value: '0 4px 16px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.4)' },
  lg: { value: '0 8px 24px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.5)' },
  xl: { value: '0 16px 48px rgba(0, 0, 0, 0.8), 0 8px 24px rgba(0, 0, 0, 0.6)' },

  // Glow shadows (primary - purple)
  glow: {
    primary: { value: '0 0 10px rgba(124, 91, 214, 0.4)' },
    'primary-lg': { value: '0 0 20px rgba(124, 91, 214, 0.5), 0 0 40px rgba(124, 91, 214, 0.3)' },
    'primary-xl': { value: '0 0 30px rgba(124, 91, 214, 0.6), 0 0 60px rgba(124, 91, 214, 0.4)' },

    // Utility (teal)
    utility: { value: '0 0 10px rgba(42, 185, 176, 0.3)' },
    'utility-lg': { value: '0 0 20px rgba(42, 185, 176, 0.4), 0 0 40px rgba(42, 185, 176, 0.2)' },

    // Emphasis (rose)
    emphasis: { value: '0 0 10px rgba(216, 107, 154, 0.3)' },
    'emphasis-lg': { value: '0 0 20px rgba(216, 107, 154, 0.4), 0 0 40px rgba(216, 107, 154, 0.2)' },

    // Error (red)
    error: { value: '0 0 10px rgba(216, 82, 77, 0.4)' },
  },

  // Inset shadows
  inset: {
    primary: { value: 'inset 0 0 10px rgba(124, 91, 214, 0.3)' },
    subtle: { value: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)' },
    deep: { value: 'inset 0 2px 8px rgba(0, 0, 0, 0.5)' },
  },
})
