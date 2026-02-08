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
    borderColor: 'border.strong',
    background: 'surface.1',
    borderRadius: 'md',
    boxShadow: 'var(--chakra-shadows-sm), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
  },
})
