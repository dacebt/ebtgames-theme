import { defineSlotRecipe } from '@chakra-ui/react'

export const modalSlotRecipe = defineSlotRecipe({
  className: 'modal',
  slots: ['backdrop', 'modal', 'header', 'title', 'content'],
  base: {
    backdrop: {
      position: 'fixed',
      inset: 0,
      background: 'var(--color-overlay-backdrop-heavy)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 'modal',
      padding: 'md',
    },
    modal: {
      background:
        'linear-gradient(145deg, var(--color-surface-card-top), var(--color-surface-card-bottom))',
      borderWidth: 'base',
      borderStyle: 'solid',
      borderColor: 'border.contrast',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow:
        'var(--shadow-elevation-3), inset 0 1px 0 rgba(255, 255, 255, 0.08), var(--shadow-focus-ring-primary)',
      borderRadius: 'md',
    },
    header: {
      padding: 'lg',
      borderBottomWidth: 'thin',
      borderBottomStyle: 'solid',
      borderBottomColor: 'border.soft',
      background: 'linear-gradient(180deg, var(--color-overlay-subtle), transparent)',
    },
    title: {
      margin: 0,
      fontFamily: 'display',
      fontSize: 'xl',
      color: 'text.primary',
      textTransform: 'uppercase',
      letterSpacing: 'tight',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    },
    content: {
      padding: 'lg',
    },
  },
})
