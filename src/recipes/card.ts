import { defineRecipe } from '@chakra-ui/react'

/**
 * Card recipe for container panels
 */
export const cardRecipe = defineRecipe({
  className: 'card',
  base: {
    background:
      'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.soft',
    borderRadius: 'md',
    padding: 'lg',
    boxShadow: 'var(--shadow-elevation-1), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
    transition: 'box-shadow var(--timing-base) var(--easing-default), border-color var(--timing-base) var(--easing-default)',
  },
  variants: {
    variant: {
      subtle: {
        background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-surface-1))',
        borderColor: 'border.soft',
        boxShadow: 'var(--shadow-xs), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
      },
      elevated: {
        background:
          'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
        borderColor: 'border.contrast',
        boxShadow: 'var(--shadow-elevation-2), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      outline: {
        background: 'transparent',
        borderColor: 'border.contrast',
        boxShadow: 'none',
      },
      glow: {
        background:
          'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
        borderColor: 'primary.DEFAULT',
        boxShadow:
          'var(--shadow-elevation-2), var(--shadow-focus-ring-primary), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
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
