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
    borderColor: 'border.soft',
    background:
      'linear-gradient(145deg, var(--color-surface-control-top), var(--color-surface-control-bottom))',
    color: 'text.primary',
    cursor: 'pointer',
    pointerEvents: 'auto',
    userSelect: 'none',
    transition: 'transform 160ms var(--easing-default), box-shadow 180ms var(--easing-default), border-color 180ms var(--easing-default), background 180ms var(--easing-default)',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
    fontWeight: 'medium',
    borderRadius: 'md',
    boxShadow: 'button.base',

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'button.base',
    },

    _focusVisible: {
      outline: 'none',
      boxShadow: 'focus.primary, button.base',
    },
  },
  variants: {
    variant: {
      primary: {
        borderColor: 'primary.DEFAULT',
        color: 'primary',

        _hover: {
          background:
            'linear-gradient(145deg, var(--color-interactive-primary-hover), var(--color-interactive-primary))',
          borderColor: 'primary.hover',
          color: 'surface.0',
          boxShadow: 'button.hover',
          transform: 'translateY(-1px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'button.active',
        },
      },
      secondary: {
        borderColor: 'utility.DEFAULT',
        color: 'utility',

        _hover: {
          background:
            'linear-gradient(145deg, var(--color-interactive-secondary), var(--color-interactive-secondary-hover))',
          borderColor: 'utility.hover',
          color: 'surface.0',
          boxShadow: 'button.hover',
          transform: 'translateY(-1px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'button.active',
        },
      },
      danger: {
        borderColor: 'status.error',
        color: 'status.error',

        _hover: {
          background: 'linear-gradient(145deg, var(--color-status-error), var(--color-status-error))',
          borderColor: 'status.error',
          color: 'surface.0',
          boxShadow: 'button.hover',
          transform: 'translateY(-1px)',
        },

        _active: {
          transform: 'translateY(0)',
          boxShadow: 'button.active',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
