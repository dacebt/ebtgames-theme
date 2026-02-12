import { defineSlotRecipe } from '@chakra-ui/react'

export const victoryScreenSlotRecipe = defineSlotRecipe({
  slots: ['overlay', 'content', 'title', 'stats', 'badge', 'actions'],
  base: {
    overlay: {
      position: 'fixed',
      inset: 0,
      background: 'overlay.backdrop.heavy',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 'overlay',
      padding: 'md',
    },
    content: {
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 'xl',
      padding: 'xl',
      borderWidth: 'thick',
      borderStyle: 'solid',
      borderColor: 'border.contrast',
      background:
        'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
      boxShadow: 'var(--shadow-elevation-3), var(--shadow-focus-ring-primary)',
    },
    title: {
      fontFamily: 'display',
      fontSize: '3xl',
      color: 'text.primary',
      letterSpacing: 'wide',
      textShadow: '0 2px 8px rgba(0, 0, 0, 0.45)',
      animation: 'pulse 2s ease-in-out infinite',
    },
    stats: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'sm',
      padding: 'md',
      borderWidth: 'base',
      borderStyle: 'solid',
      borderColor: 'primary.DEFAULT',
      background: 'overlay.primarySoft',
      animation: 'glowHighlight 2s ease-in-out infinite',
    },
    actions: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
    },
  },
})
