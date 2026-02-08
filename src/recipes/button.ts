import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    fontFamily: 'body',
    fontSize: 'base',
    px: 'lg',
    py: 'sm',
    borderWidth: 'base',
    borderStyle: 'solid',
    borderColor: 'border.strong',
    background: 'linear-gradient(145deg, var(--color-surface-1), var(--color-surface-0))',
    color: 'text.primary',
    cursor: 'pointer',
    pointerEvents: 'auto',
    userSelect: 'none',
    transition: 'all 200ms ease',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
    fontWeight: 'medium',
    borderRadius: 'md',
    boxShadow: 'var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.05)',

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    _focusVisible: {
      outline: 'var(--border-width-base) solid var(--color-interactive-primary)',
      outlineOffset: 'var(--border-width-base)',
    },
  },
  variants: {
    variant: {
      primary: {
        borderColor: 'primary',
        color: 'primary',

        _hover: {
          background: 'linear-gradient(145deg, var(--color-interactive-primary-hover), var(--color-interactive-primary))',
          color: 'surface.0',
          boxShadow: 'var(--shadow-md), var(--shadow-glow-primary-lg)',
          transform: 'translateY(-2px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-xs), var(--shadow-glow-primary)',
        },
      },
      secondary: {
        borderColor: 'utility',
        color: 'utility',

        _hover: {
          background: 'linear-gradient(145deg, var(--color-interactive-secondary), var(--color-interactive-secondary-hover))',
          color: 'surface.0',
          boxShadow: 'var(--shadow-md), var(--shadow-glow-secondary-lg)',
          transform: 'translateY(-2px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-xs), var(--shadow-glow-secondary)',
        },
      },
      danger: {
        borderColor: 'status.error',
        color: 'status.error',

        _hover: {
          background: 'linear-gradient(145deg, var(--color-status-error), var(--color-status-error))',
          color: 'surface.0',
          boxShadow: 'var(--shadow-md), var(--shadow-glow-error)',
          transform: 'translateY(-2px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-xs), var(--shadow-glow-error)',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
