import { defineRecipe } from '@chakra-ui/react'

export const cellRecipe = defineRecipe({
  className: 'ninefold-cell',
  base: {
    aspectRatio: '1',
    background: 'linear-gradient(145deg, {colors.surface.1}, {colors.surface.0})',
    borderWidth: 'thin',
    borderColor: 'border.subtle',
    borderStyle: 'solid',
    color: 'text.primary',
    fontFamily: 'body',
    fontSize: 'cell',
    cursor: 'pointer',
    transition: 'all var(--transition-fast) var(--ease-default)',
    p: 0,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '{shadows.inset.subtle}, 0 1px 2px rgba(0, 0, 0, 0.2)',
    _focusVisible: {
      outline: '{borderWidths.base} solid {colors.primary.DEFAULT}',
      outlineOffset: '-2px',
      zIndex: 'base',
    },
  },
  variants: {
    state: {
      normal: {
        _hover: {
          background: 'linear-gradient(145deg, {colors.surface.2}, {colors.surface.1})',
          borderColor: 'primary.hover',
          boxShadow:
            '{shadows.inset.subtle}, 0 2px 4px rgba(0, 0, 0, 0.3), {shadows.glow.primary}',
          transform: 'translateY(-1px)',
        },
      },
      given: {
        fontWeight: 'bold',
        background: 'linear-gradient(145deg, {colors.surface.2}, {colors.surface.1})',
        borderColor: 'border.strong',
        cursor: 'default',
        boxShadow: '{shadows.inset.subtle}, 0 2px 4px rgba(0, 0, 0, 0.3)',
        _hover: {
          background: 'linear-gradient(145deg, {colors.surface.2}, {colors.surface.1})',
          borderColor: 'border.strong',
          boxShadow: '{shadows.inset.subtle}, 0 2px 4px rgba(0, 0, 0, 0.3)',
          transform: 'none',
        },
      },
      selected: {
        background: 'linear-gradient(145deg, rgba(124, 91, 214, 0.2), rgba(124, 91, 214, 0.1))',
        borderColor: 'primary.DEFAULT',
        boxShadow: 'cell.selected',
        transform: 'translateY(-2px)',
      },
      conflict: {
        background: 'linear-gradient(145deg, rgba(216, 82, 77, 0.2), rgba(216, 82, 77, 0.1))',
        borderColor: 'status.error',
        color: 'status.error',
        boxShadow: 'cell.conflict',
      },
      selectedConflict: {
        background: 'linear-gradient(145deg, rgba(216, 82, 77, 0.2), rgba(216, 82, 77, 0.1))',
        borderColor: 'status.error',
        color: 'status.error',
        boxShadow: 'cell.conflict',
        transform: 'translateY(-2px)',
      },
    },
  },
  defaultVariants: {
    state: 'normal',
  },
})
