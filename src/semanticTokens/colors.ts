import { defineSemanticTokens } from '@chakra-ui/react'

export const semanticColors = defineSemanticTokens.colors({
  // Background mappings
  bg: {
    base: { value: '{colors.surface.0}' },
    elevated: { value: '{colors.surface.1}' },
    card: { value: '{colors.surface.2}' },
    raised: { value: '{colors.surface.3}' },
  },

  // Interactive states
  interactive: {
    base: { value: '{colors.primary.DEFAULT}' },
    hover: { value: '{colors.primary.hover}' },
  },

  // Border (for buttons, inputs, cards)
  border: {
    subtle: { value: '{colors.border.subtle}' },
    strong: { value: '{colors.border.strong}' },
    control: { value: '{colors.border.soft}' },
    emphasis: { value: '{colors.border.contrast}' },
  },
})
