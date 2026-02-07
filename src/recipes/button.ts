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
    background: 'linear-gradient(145deg, var(--chakra-colors-surface-1), var(--chakra-colors-surface-0))',
    color: 'text.primary',
    cursor: 'pointer',
    pointerEvents: 'auto',
    userSelect: 'none',
    transition: 'all 200ms ease',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
    fontWeight: 'medium',
    borderRadius: 'md',
    boxShadow: 'var(--chakra-shadows-sm), inset 0 1px 0 rgba(255, 255, 255, 0.05)',

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    _focusVisible: {
      outline: 'var(--chakra-border-widths-base) solid var(--chakra-colors-primary)',
      outlineOffset: 'var(--chakra-border-widths-base)',
    },
  },
  variants: {
    variant: {
      primary: {
        borderColor: 'primary',
        color: 'primary',

        _hover: {
          background: 'linear-gradient(145deg, var(--chakra-colors-primary-hover), var(--chakra-colors-primary))',
          color: 'surface.0',
          boxShadow: 'var(--chakra-shadows-md), var(--chakra-shadows-glow-primary-lg)',
          transform: 'translateY(-2px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--chakra-shadows-xs), var(--chakra-shadows-glow-primary)',
        },
      },
      secondary: {
        borderColor: 'utility',
        color: 'utility',

        _hover: {
          background: 'linear-gradient(145deg, var(--chakra-colors-utility), var(--chakra-colors-utility-hover))',
          color: 'surface.0',
          boxShadow: 'var(--chakra-shadows-md), var(--chakra-shadows-glow-utility-lg)',
          transform: 'translateY(-2px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--chakra-shadows-xs), var(--chakra-shadows-glow-utility)',
        },
      },
      danger: {
        borderColor: 'status.error',
        color: 'status.error',

        _hover: {
          background: 'linear-gradient(145deg, var(--chakra-colors-status-error), var(--chakra-colors-status-error))',
          color: 'surface.0',
          boxShadow: 'var(--chakra-shadows-md), var(--chakra-shadows-glow-error)',
          transform: 'translateY(-2px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'var(--chakra-shadows-xs), var(--chakra-shadows-glow-error)',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
