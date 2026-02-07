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
    justifyContent: 'center',
  },
})
