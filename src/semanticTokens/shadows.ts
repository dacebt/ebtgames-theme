import { defineSemanticTokens } from '@chakra-ui/react'

export const semanticShadows = defineSemanticTokens.shadows({
  // Button shadows
  button: {
    base: { value: '{shadows.elevation.1}, {shadows.inset.subtle}' },
    hover: { value: '{shadows.elevation.2}, {shadows.inset.subtle}' },
    active: { value: '{shadows.press.inset}' },
  },

  // Input shadows
  input: {
    focus: { value: '{shadows.focus.primary}' },
  },

  // Cell shadows (most complex - 4-layer stack for selected state)
  cell: {
    selected: {
      value:
        '{shadows.inset.primary}, 0 0 0 {borderWidths.base} rgba(155, 124, 255, 0.52), {shadows.glow.primary}, 0 4px 12px rgba(155, 124, 255, 0.18)',
    },
    conflict: {
      value: '{shadows.glow.error}, 0 2px 6px rgba(226, 102, 98, 0.26)',
    },
  },
})
