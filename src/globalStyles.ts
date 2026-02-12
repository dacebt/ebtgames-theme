import { defineGlobalStyles } from '@chakra-ui/react'
import { allCssVariables } from './cssVariables'

/**
 * Global CSS styles including:
 * - CSS variable injection into :root
 * - Background effects (gradients, noise texture)
 * - Scrollbar styling
 * - Selection styling
 * - Focus visible states
 */
export const globalCss = defineGlobalStyles({
  // Inject CSS variables into :root
  ':root': allCssVariables,

  // Universal reset
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  // Body base styles
  body: {
    backgroundColor: 'var(--color-surface-0)',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--font-size-base)',
    lineHeight: '1.5',
  },

  // Body pseudo-elements for background effects
  'body::before': {
    content: '""',
    position: 'fixed',
    inset: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 55%),
      radial-gradient(circle at 80% 80%, rgba(155, 124, 255, 0.03) 0%, transparent 45%)
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
    background: 'var(--color-surface-1)',
  },

  '::-webkit-scrollbar-thumb': {
    background: 'var(--color-interactive-secondary)',
    borderRadius: 'var(--radius-sm)',
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: 'var(--color-interactive-secondary-hover)',
  },

  // Firefox scrollbar
  '*': {
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--color-interactive-secondary) var(--color-surface-1)',
  },

  // Selection styling
  '::selection': {
    background: 'var(--color-interactive-primary)',
    color: 'var(--color-text-primary)',
  },

  // Focus visible outline
  ':focus-visible': {
    outline: '2px solid var(--color-interactive-primary)',
    outlineOffset: '2px',
  },
})
