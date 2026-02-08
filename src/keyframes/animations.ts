import { defineKeyframes } from '@chakra-ui/react'

/**
 * Animation keyframes using CSS variables for theming.
 * CSS variable references (e.g., var(--shadow-glow-primary)) ensure
 * animations stay in sync with the design system.
 */
export const keyframes = defineKeyframes({
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },

  fadeOut: {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },

  pulse: {
    '0%, 100%': {
      transform: 'scale(1)',
      opacity: '1',
    },
    '50%': {
      transform: 'scale(1.03)',
      opacity: '0.95',
    },
  },

  glow: {
    '0%, 100%': {
      boxShadow: 'var(--shadow-glow-primary)',
    },
    '50%': {
      boxShadow: 'var(--shadow-glow-primary-lg)',
    },
  },

  glowSecondary: {
    '0%, 100%': {
      boxShadow: 'var(--shadow-glow-secondary)',
    },
    '50%': {
      boxShadow: 'var(--shadow-glow-secondary-lg)',
    },
  },

  glowAccent: {
    '0%, 100%': {
      boxShadow: 'var(--shadow-glow-accent)',
    },
    '50%': {
      boxShadow: 'var(--shadow-glow-accent-lg)',
    },
  },

  // Legacy alias for backward compatibility
  glowHighlight: {
    '0%, 100%': {
      boxShadow: 'var(--shadow-glow-accent)',
    },
    '50%': {
      boxShadow: 'var(--shadow-glow-accent-lg)',
    },
  },

  blink: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.3' },
  },

  bounce: {
    '0%, 80%, 100%': {
      transform: 'scale(0)',
      opacity: '0.5',
    },
    '40%': {
      transform: 'scale(1)',
      opacity: '1',
    },
  },

  scaleIn: {
    from: {
      transform: 'scale(0.8)',
      opacity: '0',
    },
    to: {
      transform: 'scale(1)',
      opacity: '1',
    },
  },

  scaleOut: {
    from: {
      transform: 'scale(1)',
      opacity: '1',
    },
    to: {
      transform: 'scale(0.8)',
      opacity: '0',
    },
  },

  slideInUp: {
    from: {
      transform: 'translateY(10px)',
      opacity: '0',
    },
    to: {
      transform: 'translateY(0)',
      opacity: '1',
    },
  },

  slideInDown: {
    from: {
      transform: 'translateY(-10px)',
      opacity: '0',
    },
    to: {
      transform: 'translateY(0)',
      opacity: '1',
    },
  },

  spin: {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
})
