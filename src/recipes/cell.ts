import { defineRecipe } from '@chakra-ui/react'

export const cellRecipe = defineRecipe({
  className: 'ninefold-cell',
  base: {
    aspectRatio: '1',
    background:
      'linear-gradient(145deg, var(--color-surface-control-top), var(--color-surface-control-bottom))',
    borderWidth: 'thin',
    borderColor: 'border.soft',
    borderStyle: 'solid',
    color: 'text.primary',
    fontFamily: 'body',
    fontSize: 'cell',
    cursor: 'pointer',
    transition: 'all var(--timing-fast) var(--easing-default)',
    p: 0,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-inset-subtle), var(--shadow-elevation-1)',
    _focusVisible: {
      outline: 'none',
      boxShadow:
        'var(--shadow-inset-subtle), var(--shadow-elevation-1), var(--shadow-focus-ring-primary)',
      zIndex: 'base',
    },
  },
  variants: {
    state: {
      normal: {
        _hover: {
          background:
            'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
          borderColor: 'primary.hover',
          boxShadow: 'var(--shadow-inset-subtle), var(--shadow-elevation-2)',
          transform: 'translateY(-1px)',
        },
      },
      given: {
        fontWeight: 'bold',
        background:
          'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
        borderColor: 'border.contrast',
        cursor: 'default',
        boxShadow: 'var(--shadow-inset-subtle), var(--shadow-elevation-1)',
        _hover: {
          background:
            'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
          borderColor: 'border.contrast',
          boxShadow: 'var(--shadow-inset-subtle), var(--shadow-elevation-1)',
          transform: 'none',
        },
      },
      selected: {
        background:
          'linear-gradient(145deg, var(--color-overlay-primary-soft), rgba(155, 124, 255, 0.05))',
        borderColor: 'primary.DEFAULT',
        boxShadow: 'cell.selected',
        transform: 'translateY(-1px)',
      },
      conflict: {
        background: 'linear-gradient(145deg, rgba(226, 102, 98, 0.16), rgba(226, 102, 98, 0.08))',
        borderColor: 'status.error',
        color: 'status.error',
        boxShadow: 'cell.conflict',
      },
      selectedConflict: {
        background: 'linear-gradient(145deg, rgba(226, 102, 98, 0.16), rgba(226, 102, 98, 0.08))',
        borderColor: 'status.error',
        color: 'status.error',
        boxShadow: 'cell.conflict',
        transform: 'translateY(-1px)',
      },
    },
  },
  defaultVariants: {
    state: 'normal',
  },
})
