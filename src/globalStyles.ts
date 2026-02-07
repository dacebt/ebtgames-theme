import { defineGlobalStyles } from '@chakra-ui/react'

export const globalCss = defineGlobalStyles({
  // Universal reset
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  // Body pseudo-elements for background effects
  'body::before': {
    content: '""',
    position: 'fixed',
    inset: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 50%, rgba(124, 91, 214, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(42, 185, 176, 0.02) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
    zIndex: 0,
  },

  'body::after': {
    content: '""',
    position: 'fixed',
    inset: 0,
    backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" opacity="0.03"/%3E%3C/svg%3E')`,
    opacity: 0.03,
    pointerEvents: 'none',
    zIndex: 0,
  },

  // Custom scrollbar (webkit)
  '::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },

  '::-webkit-scrollbar-track': {
    background: '{colors.surface.1}',
  },

  '::-webkit-scrollbar-thumb': {
    background: '{colors.utility.DEFAULT}',
    borderRadius: '{radii.sm}',
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: '{colors.utility.hover}',
  },

  // Firefox scrollbar
  '*': {
    scrollbarWidth: 'thin',
    scrollbarColor: '{colors.utility.DEFAULT} {colors.surface.1}',
  },

  // Selection styling
  '::selection': {
    background: '{colors.primary.DEFAULT}',
    color: '{colors.text.primary}',
  },

  // Focus visible outline
  ':focus-visible': {
    outline: '2px solid {colors.primary.DEFAULT}',
    outlineOffset: '2px',
  },
})
