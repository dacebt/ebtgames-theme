import { defineSemanticTokens } from '@chakra-ui/react'

export const semanticShadows = defineSemanticTokens.shadows({
  // Button shadows
  button: {
    base: { value: '{shadows.sm}, {shadows.inset.subtle}' },
    hover: { value: '{shadows.md}, {shadows.glow.primary-lg}' },
  },

  // Cell shadows (most complex - 4-layer stack for selected state)
  cell: {
    selected: {
      value:
        '{shadows.inset.primary}, 0 0 0 {borderWidths.base} rgba(124, 91, 214, 0.55), {shadows.glow.primary}, 0 4px 12px rgba(124, 91, 214, 0.2)',
    },
    conflict: {
      value: '{shadows.glow.error}, 0 2px 6px rgba(216, 82, 77, 0.3)',
    },
  },
})
