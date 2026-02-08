import { defineRecipe } from '@chakra-ui/react'

/**
 * Card recipe for container panels
 */
export const cardRecipe = defineRecipe({
  className: 'card',
  base: {
    background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-surface-1))',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.subtle',
    borderRadius: 'md',
    padding: 'lg',
    boxShadow: 'var(--shadow-sm)',
  },
  variants: {
    variant: {
      subtle: {
        background: 'surface.1',
        borderColor: 'border.subtle',
        boxShadow: 'none',
      },
      elevated: {
        background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-surface-1))',
        borderColor: 'border.strong',
        boxShadow: 'var(--shadow-md)',
      },
      outline: {
        background: 'transparent',
        borderColor: 'border.strong',
        boxShadow: 'none',
      },
      glow: {
        background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-surface-1))',
        borderColor: 'primary.DEFAULT',
        boxShadow: 'var(--shadow-md), var(--shadow-glow-primary)',
      },
    },
    size: {
      sm: {
        padding: 'sm',
        borderRadius: 'sm',
      },
      md: {
        padding: 'md',
        borderRadius: 'md',
      },
      lg: {
        padding: 'lg',
        borderRadius: 'lg',
      },
    },
  },
  defaultVariants: {
    variant: 'elevated',
    size: 'md',
  },
})
