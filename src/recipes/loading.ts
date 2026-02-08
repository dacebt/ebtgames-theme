import { defineRecipe } from '@chakra-ui/react'

/**
 * Loading dots recipe
 * Animated bouncing dots for loading states
 */
export const loadingRecipe = defineRecipe({
  className: 'loading',
  base: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    backgroundColor: 'primary.DEFAULT',
    borderRadius: '50%',
    animation: 'bounce 1.4s infinite ease-in-out both',
  },
  variants: {
    size: {
      sm: {
        width: '8px',
        height: '8px',
      },
      md: {
        width: '12px',
        height: '12px',
      },
      lg: {
        width: '16px',
        height: '16px',
      },
    },
    color: {
      primary: {
        backgroundColor: 'primary.DEFAULT',
      },
      secondary: {
        backgroundColor: 'utility.DEFAULT',
      },
      accent: {
        backgroundColor: 'emphasis.DEFAULT',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})
