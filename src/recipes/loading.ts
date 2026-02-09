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
    borderRadius: '50%',
    animationName: 'bounce',
    animationDuration: '1.4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'both',
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
        bg: 'primary',
      },
      secondary: {
        bg: 'utility',
      },
      accent: {
        bg: 'emphasis',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})
