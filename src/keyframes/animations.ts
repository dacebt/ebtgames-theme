import { defineKeyframes } from '@chakra-ui/react'

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
      boxShadow: '0 0 10px rgba(124, 91, 214, 0.4)',
    },
    '50%': {
      boxShadow: '0 0 20px rgba(124, 91, 214, 0.5), 0 0 40px rgba(124, 91, 214, 0.3)',
    },
  },

  glowHighlight: {
    '0%, 100%': {
      boxShadow: '0 0 10px rgba(216, 107, 154, 0.3)',
    },
    '50%': {
      boxShadow: '0 0 20px rgba(216, 107, 154, 0.4), 0 0 40px rgba(216, 107, 154, 0.2)',
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
})
