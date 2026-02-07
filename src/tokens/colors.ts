import { defineTokens } from '@chakra-ui/react'

export const colors = defineTokens.colors({
  // Surface Colors (deep purple monochrome)
  surface: {
    0: { value: '#1B0F26' }, // Base background - darkest
    1: { value: '#24122F' }, // Elevated surfaces
    2: { value: '#2B173A' }, // Cards/panels
    3: { value: '#342046' }, // Raised/hover states
  },

  // Text Colors (WCAG AA verified)
  text: {
    primary: { value: '#F5F1FA' },   // 16.49:1 contrast
    secondary: { value: '#D8D0E3' }, // 12.29:1 contrast
    muted: { value: '#B9AEC9' },     // 8.72:1 contrast
    disabled: { value: '#9E92B4' },  // 6.32:1 contrast
  },

  // Primary (Purple - interactive)
  primary: {
    DEFAULT: { value: '#7C5BD6' },
    hover: { value: '#6F4FCB' },
  },

  // Utility (Teal - complementary)
  utility: {
    DEFAULT: { value: '#2AB9B0' },
    hover: { value: '#52D6CC' },
  },

  // Emphasis (Rose - sparingly)
  emphasis: {
    DEFAULT: { value: '#D86B9A' },
  },

  // Border Colors (neutral gray)
  border: {
    subtle: { value: '#3A3341' },
    strong: { value: '#4A4354' },
  },

  // Status Colors
  status: {
    success: { value: '#2AB9B0' }, // Use teal
    warning: { value: '#D9A24F' }, // Amber
    error: { value: '#D8524D' },   // Red
  },

  // Overlays (purple-based transparency)
  overlay: {
    subtle: { value: 'rgba(124, 91, 214, 0.05)' },     // Purple hover tint
    light: { value: 'rgba(124, 91, 214, 0.1)' },       // Purple selected
    medium: { value: 'rgba(124, 91, 214, 0.15)' },     // Purple active
    heavy: { value: 'rgba(124, 91, 214, 0.25)' },      // Purple emphasis
    error: { value: 'rgba(216, 82, 77, 0.12)' },       // Error tint
    backdrop: {
      light: { value: 'rgba(27, 15, 38, 0.8)' },
      heavy: { value: 'rgba(27, 15, 38, 0.95)' },
    },
  },
})
