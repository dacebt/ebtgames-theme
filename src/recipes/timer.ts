import { defineRecipe } from '@chakra-ui/react'

export const timerRecipe = defineRecipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 'sm',
    fontFamily: 'body',
    fontSize: 'lg',
    color: 'primary',
    paddingY: 'sm',
    paddingX: 'md',
    borderWidth: 'base',
    borderStyle: 'solid',
    borderColor: 'border.contrast',
    background:
      'linear-gradient(145deg, var(--color-surface-control-top), var(--color-surface-control-bottom))',
    borderRadius: 'md',
    boxShadow: 'var(--shadow-elevation-1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
  },
})
